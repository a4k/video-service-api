/**
 * FilmsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: function (req, res) {

    sails.models.film.find({
        include: [{model: Category, as: 'categories', through: {attributes: []}}],
        order: [['sort', 'ASC']]
      }
    ).exec((err, films) => {
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

      return res.ok({
        model: 'film',
        luckyCoolNumber: Math.ceil(10 * Math.random()),
        record: films
      });
    });

  },

};

