var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
	return {
  		index: function(req, res) {
     		Friend.find({}, function(err, results) {
		       if(err) {
		         console.log(err);
		       } else {
		         res.json(results);
		       }
   			}) 
  		},

  		create: function(req, res) {
   	    	Friend.create(req.body, function (err, results){
		        if(err) {
		          console.log(err);
		        } else {
		          res.json(results);
		        }
     		});
   		},

   		destroy: function(req, res) {
   	    	Friend.remove({_id: req.params.id}, function (err, results){
		        if(err) {
		          console.log(err);
		        } else {
		          res.json(results);
		        }
     		});
   		}
	}
})();
