/**
 * FilmsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: function (req, res) {

    sails.models.film.find().populate('category').exec((err, films) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!films) {
        return res.notFound();
      }

      return res.ok(films);
    });

  },

};

