/**
 * TvController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: function (req, res) {

    sails.models.tv.find().populate('schedule').exec((err, tv) => {
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
};

