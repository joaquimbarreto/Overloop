const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true
  }
})

AuthorSchema.path('name').validate(function (name) {
  return name.length
}, 'Name cannot be blank')

AuthorSchema.statics = {
  load: function (id, cb) {
    this.findOne({
      _id: id
    }).exec(cb)
  }
}

mongoose.model('Author', AuthorSchema)
