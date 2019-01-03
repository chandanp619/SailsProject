/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
index:function(request,response){
    return response.view('pages/homepage', {currentDate: (new Date()).toString(),name:'Chandan Pradhan'});
}
};

