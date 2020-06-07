/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: function (req, res) {

    sails.models.category.find().populate('films').exec((err, categories) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!categories) {
        return res.notFound();
      }

      return res.ok(categories);
    });

  },

};

