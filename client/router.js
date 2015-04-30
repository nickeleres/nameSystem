//client/router.js

Router.configure({
	layoutTemplate: 'layoutTemplate'
});

var requireLogin = function() {
	if (! Meteor.user()){
		this.redirect('home');
		this.next();
	} else if (Meteor.loggingIn()) {
		this.render('adminTemplate')
	} else {
		this.next();
	}
}

var signInRoute = function(){
	if(!(Meteor.loggingIn() || Meteor.user())){
		this.render('loginTemplate');
	} else {
		this.next();
	}
}

var requireAdmin = function(){
	var user = Meteor.users.find({_id: Meteor.userId()}).fetch()[0].admin;
	if(user = 'undefined'){
		this.redirect('home');
		this.next();
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin);
Router.onBeforeAction(signInRoute);
// Router.onBeforeAction(requireAdmin);
