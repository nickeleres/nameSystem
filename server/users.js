//server/users.js

Meteor.publish('users', function(){
	if(!this.userId){
		console.log('you are not signed in');
	}
	else if(this.userId != 'GfjaBg9ghfGefk9F8' ){
		console.log('you are not an admin');
	} else {
		return Meteor.users.find({}, {fields: {createdAt: 1, admin: 1, emails: 1}}); 
	}
});

