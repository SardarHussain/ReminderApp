import { Template } from 'meteor/templating';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import { ReactiveDict } from 'meteor/reactive-dict';

//import './layouts/homeLayout.html';
//import './layouts/mainLayout.html';
//import './partials/header.html'
//import './partials/sideNav.html'

//import './router.js';

import './components/reminder.js';
import './components/calendarpage.js';
import {ReminderData} from '../api/reminderdata.js';


import './body.html';

Template.body.onCreated(() => {
  this.state = new ReactiveDict();
  Meteor.subscribe('reminderdata');
});
 

 Template.body.helpers({
  reminderdata() {
        //return ReminderData.find({}, { sort: { createdAt: -1 } });
       // return ReminderData.find({userId: $userId}, { sort: { createdAt: -1 } });

        return ReminderData.find({userid: Meteor.userId()}, { sort: { date: 0 } });


  }, 
}); 
