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
	}
});

