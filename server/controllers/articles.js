const mongoose = require('mongoose')
const Article = mongoose.model('Article')

exports.article = function (req, res, next, id) {
  Article.load(id, function (err, article) {
    if (err) return next(err)
    if (!article) return next(new Error('Failed to load article ' + id))
    req.article = article
    next()
  })
}

exports.create = function (req, res, next) {
  const article = new Article(req.body)
  article.user = req.user

  article.save(function (err) {
    if (err) {
      return next(err)
    }

    res.send(article)
  })
}

exports.update = function (req, res, next) {
  Article
    .findByIdAndUpdate(req.params.articleId, {
      $set: req.body
    }, {
      new: true
    }, function (err, article) {
      if (err) {
        return next(err)
      }

      res.send(article)
    })
}

exports.destroy = function (req, res, next) {
  const article = req.article

  article.remove(function (err) {
    if (err) {
      return next(err)
    }

    res.send(article)
  })
}

exports.show = function (req, res) {
  res.send(req.article)
}

exports.all = function (req, res, next) {
  Article
    .find()
    .sort('-created')
    .populate('user')
    .exec(function (err, articles) {
      if (err) {
        return next(err)
      }

      res.send(articles)
    })
}
