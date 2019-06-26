import { API_URL } from 'config'

let defaultHeaders = {
  'accept': 'application/json',
  'content-type': 'application/json'
}

export default function request (path, args = {}) {
  const url = `${API_URL}/${path}`

  const options = {
    headers: defaultHeaders,
    method: args.method || 'GET'
  }

  if (args.data && !args.isFormData) {
    options.body = JSON.stringify(args.data)
    options.headers['content-type'] = 'application/json'
  }

  if (args.isFormData) {
    delete options.headers['content-type']
    options.body = args.data
  }

  return fetch(url, options)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res
      }

      const error = new Error(res.statusText)
      error.res = res
      throw error
    })
    .then((res) => {
      if (res.status === 204) {
        return res
      }

      return res
        .json()
        .then((body) => [body, res])
        .then(([ body ]) => body)
    })
}
