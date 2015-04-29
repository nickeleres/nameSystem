//lib/collections/users.js

Meteor.methods({
	addAdminStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"admin" : true}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'added admin status');
	},

	removeAdminStatus: function(user_id){
		Meteor.users.update({_id: user_id}, {$set : {"admin" : false}});
		console.log(user_id, 'user_id');
		var current_user = Meteor.users.find({_id: user_id});
		console.log(current_user, 'removed admin status');
	},

	updateUsername: function(user_id, username_field){
		Meteor.users.update({_id: user_id}, {$set : { 'username' : username_field}});
		console.log(username_field, 'username updated');
	},

	updateFirstName: function(user_id, first_name_field){
		Meteor.users.update({_id: user_id}, {$set : { 'first_name' : first_name_field}});
		console.log(first_name_field, 'first name updated');
	},

	updateLastName: function(user_id, last_name_field){
		Meteor.users.update({_id: user_id}, {$set : { 'last_name' : last_name_field}});
		console.log(last_name_field, 'last name updated');
	}
})