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

Router.onBeforeAction(requireLogin);
Router.onBeforeAction(signInRoute);
