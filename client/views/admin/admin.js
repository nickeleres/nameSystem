//client/views/admin/admin.js

Router.route('admin', {
	path: '/admin',
	template: 'adminTemplate',
	waitOn: function(){
		return Meteor.subscribe('users');
	}
});

Template.adminTemplate.helpers({
	users: function(){
		return Meteor.users.find();
	},

	notAdmin: function(){
		var user_object = Meteor.users.find({_id: this._id}, {admin: 1}).fetch();
		var admin_status = user_object[0].admin;
		return admin_status != true;
	}
});

Template.adminTemplate.events({
	'click .set_admin_status': function(ev){
		ev.preventDefault();
		$('.set_admin_status').css('display', 'none');
		$('.admin_group').css('display', 'inline-block');
	},

	'click .set_admin_status': function(ev){
		ev.preventDefault();

		var selected_user = Meteor.users.find({_id: this._id}).fetch();
		var current_user = Meteor.user();

		if(selected_user[0]._id != current_user._id){
			if(selected_user[0].admin === true){
				Meteor.call('removeAdminStatus', this._id);
			} else {
				Meteor.call('addAdminStatus', this._id);
			}
		} else {
			alert('You cannot change your own admin status');
		}
			
	}
});

