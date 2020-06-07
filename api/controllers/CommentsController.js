/**
 * CommentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: function (req, res) {
    let where = {};
    const filmId = req.param('film');
    if (filmId) {
      where['film'] = filmId;
    }

    sails.models.comment.find(where).populate('film').populate('user').exec((err, comment) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!comment) {
        return res.notFound();
      }

      return res.ok(comment);
    });

  },
  create: function (req, res) {
    const userId = req.param('user_id');
    const filmId = req.param('film_id');
    const content = req.param('content');


    sails.models.comment.query('INSERT INTO comments (user_id, film_id, content) VALUES ($1, $2, $3)', [userId, filmId, content],
      function (err, record) {
        if (err) {
          return res.serverError(err);
        }

        sails.models.comment.findOne({id: record.insertId}).populate('film').populate('user').exec((err, comment) => {
          if (err) {
            switch (err.name) {
              case 'UsageError':
                return res.badRequest(err);
              default:
                return res.serverError(err);
            }
          }

          if (!comment) {
            return res.notFound();
          }

          return res.ok(comment);
        });
      });

  },
  destroy: function (req, res) {
    const id = req.param('id');

    sails.models.comment.destroy({id: id}).exec(err => {
      if (err) {
        return res.serverError(err);
      }
      return res.ok({id: id});
    });

  },

};

