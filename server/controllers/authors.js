const mongoose = require('mongoose')
const Author = mongoose.model('Author')

exports.author = function (req, res, next, id) {
  Author.load(id, function (err, author) {
    if (err) return next(err)
    if (!author) return next(new Error('Failed to load author ' + id))
    req.author = author
    next()
  })
}

exports.create = function (req, res, next) {
  const author = new Author(req.body)
  author.user = req.user

  author.save(function (err) {
    if (err) {
      return next(err)
    }

    res.send(author)
  })
}

exports.update = function (req, res, next) {
  Author.findByIdAndUpdate(
    req.params.authorId,
    {
      $set: req.body
    },
    {
      new: true
    },
    function (err, author) {
      if (err) {
        return next(err)
      }

      res.send(author)
    }
  )
}

exports.destroy = function (req, res, next) {
  const author = req.author

  author.remove(function (err) {
    if (err) {
      return next(err)
    }

    res.send(author)
  })
}

exports.show = function (req, res) {
  res.send(req.author)
}

exports.all = function (req, res, next) {
  Author.find()
    .sort('-created')
    .populate('user')
    .exec(function (err, authors) {
      if (err) {
        return next(err)
      }

      res.send(authors)
    })
}
