/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
index:function(request,response){

    var db = sails.getDatastore().manager;

    db.collection('blogs').find({}).toArray(function(err,blogs){
        return response.view('pages/homepage', {currentDate: (new Date()).toString(),name:'Chandan Pradhan',blogs:blogs});
    });
    
    
}
};

