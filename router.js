/* if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]); */

 /* FlowRouter.route('/', {
	name: 'home',
	action() {
		//GAnalytics.pageview();
		//BlazeLayout.render('mainLayout', {main: 'mainLayout'});
		//BlazeLayout.render('mainLayout', {main: 'homeLayout'});
		BlazeLayout.render('mainLayout');


	}
});  */

FlowRouter.route('/create-reminder2', {
	name:'createReminder2',
	action (){

		BlazeLayout.render('tableData');

	}
  }); 

  FlowRouter.route('/create-reminder', {
	name: 'newReminder',
	action() {
		//BlazeLayout.render('mainLayout', {main: 'newReminder'});

		BlazeLayout.render('mainLayout', {main: 'addReminder'});
	}
});

FlowRouter.route('/show-calendar', {
	name: 'Calendar_Page',
	action() {
		//BlazeLayout.render('mainLayout', {main: 'calendar'});
		//BlazeLayout.render('mainLayout', {main: 'Calendar_Page'});
		BlazeLayout.render("calendarPage");
	}
});


FlowRouter.route('/reminders-list', {
	name: "reminderList",
	action() {
			BlazeLayout.render('mainLayout', {main:'tableData'});
	}
 });
 
 FlowRouter.route('/reminders-edit', {
	name: "reminderEdit",
	action() {
			BlazeLayout.render('mainLayout', {main:'remindersList'});
	}
 });
//import {FlowRouter } from 'meteor/kadira:flow-router';
//import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

/* import {Router} from 'meteor/iron:router';
//import  '../client/layouts/MainLayout.html';
import  '../client/layouts/HomeLayout.html';
import './MainLayout.html'; */

/* Router.route('/', function () {
	console.log("router msgss");
	this.render('mainLayout');
	//Blazelayout.render("mainLayout");

 });
 */


/* Router.route('/reminders-list', function () {
	console.log("router msgss");
	this.render('homeLayout');
 }); */

/* Router.route('/show-calendar', function () {
	console.log("fazool msg");
	this.render('calendar');


  });
 */
  
/* Router.route('/create-reminder',  function () {
	console.log("fazool msg");
	this.render('newReminder');
  }); */

  /* Router.route('/create-reminder2', function () {
	console.log("fazool msg");
	this.render('tableData');
  }); */
  

/* FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
    }
}); */

/* FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
}); */