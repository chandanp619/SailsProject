module.exports = {


  friendlyName: 'View user login',


  description: 'Display "User login" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user-login'
    }

  },


  fn: async function (req,res) {
    let logData = {'status':'Nothing'};
    console.log(logData);
    res.view(logData);

    // Respond with view.
    return {loginData:logData};

  }


};
