//lib/collections/users.js

Meteor.methods({
	setAdminStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"admin" : true}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user);
	}
})