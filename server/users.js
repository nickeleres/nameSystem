//server/users.js

Meteor.publish('users', function(){
	if(!this.userId){
		console.log('you are not signed in');
	}
	else if(this.userId != '4zekmrHHiDGDuBNwZ' ){
		console.log('you are not an admin');
	} else {
		return Meteor.users.find();
	}
})