/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: function (req, res) {
    const username = req.param('username');
    const password = req.param('password');

    sails.models.user.findOne({username, password}).exec((err, user) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }

      if (!user) {
        return res.notFound();
      }

      return res.ok({status: true});
    });

  },

};

