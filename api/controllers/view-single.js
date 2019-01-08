module.exports = {


  friendlyName: 'View single',


  description: 'Display "Single" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/single'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
