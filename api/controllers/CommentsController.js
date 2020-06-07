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
      where['film_id'] = filmId;
    }

    sails.models.comment.find().populate('film').populate('user').exec((err, tv) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!tv) {
        return res.notFound();
      }

      return res.ok(tv);
    });

  },
  create: function (req, res) {
    const userId = req.param('user');
    const filmId = req.param('film');
    const content = req.param('content');


    sails.models.comment
      .create({user_id: userId, film_id: filmId, content: content})
      .then((record) => {
        res.ok(record);
        return true;
      }).catch((err) => {
        return res.negotiate(err);
      });

    return res.ok();

  },

};

