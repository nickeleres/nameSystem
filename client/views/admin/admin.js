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

			$('.set_admin_status').css('display', 'nonde');
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
				
		},

		'click .edit_user_button': function(ev){
			ev.preventDefault();

			$('.user_name_info').css('display', 'inline-block');
		},

		'click #update_username': function(ev, template){
			ev.preventDefault();

			var username_field = template.$('input[id="username_field"]').val();

			console.log(username_field);

			Meteor.call('updateUsername', this._id, username_field);

		},

		'click #update_first_name': function(ev, template){
			ev.preventDefault();

			var first_name_field = template.$('input[id="first_name_field"]').val();

			Meteor.call('updateFirstName', this._id, first_name_field);

		},

		'click #update_last_name': function(ev, template){
			ev.preventDefault();

			var last_name_field = template.$('#last_name_field').val();

			console.log(last_name_field);

			Meteor.call('updateLastName', this._id, last_name_field);

		},

		'click .edit_user_button': function(ev, template){
			ev.preventDefault();

			var id = this._id;

			var edit_fields = template.$('.' + id);

			if(edit_fields.css('display', 'none')){
				edit_fields.css('display', 'inline-block');
			} else {
				edit_fields.css('display', 'none');
			}
				
		}
	});

