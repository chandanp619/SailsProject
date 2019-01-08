/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
index:function(request,response){

    var db = sails.getDatastore().manager;

    db.collection('blogs').find({}).toArray(function(err,blogs){
        return response.view('pages/blog', {blogs:blogs});
    });
    
},

single:function(request,response){

    var ObjectId = require('mongodb').ObjectID;
    var db = sails.getDatastore().manager;
    var blog_id = ObjectId(request.param('id'));
    db.collection('blogs').find({_id:blog_id}).toArray(function(err,blog){
        console.log(blog);
        return response.view('pages/single', {blog:blog[0]});
    });
    
}

};

