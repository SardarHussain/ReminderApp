import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import { check } from 'meteor/check';


/* eslint-disable object-shorthand */

export const ReminderData = new Mongo.Collection('reminderdata');

/**
 * Create the schema for EventtData
 */
 export const ReminderDataSchema = new SimpleSchema({

title: {
  label: 'Title of the event',
  type: String,
  optional: false,
},
desc: {
  label: 'Description of the event',
  type: String,
  optional: false,
},
date: {
  label: 'Start time of the event',
  type: String,
  optional: false,
},
time: {
  label: 'End time of the event',
  type: String,
  optional: false,
},

createdAt: {
  type: Date,
  label: "Created At",
  autoValue: function() {
    return new Date()
  },
 /*  autoform: {
    type: "hidden"
  } */
},

username: {
  type: String,
  label: "User Name",
  autoValue: function () {
    return this.username
  },
},

userid: {
  type: String,
  label: "User ID",
  optional: true,
  autoValue: function () {
    return this.userId
  },

},
 checked: {
  type: Boolean,
  label: "Boolean value for check",
  defaultValue: false,
  optional: false,
},

}, 
{ tracker: Tracker });
ReminderData.attachSchema(ReminderDataSchema);

 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('reminderdata', function reminderDataPublication() {
    return ReminderData.find();
  });
}

Meteor.methods({
  'reminderdata.insert'(title, desc, date, time) {
    check(title, String);
    check(desc, String);
    check(date, String);
    check(time, String);

 
    // Make sure the user is logged in before inserting a reminder
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    ReminderData.insert({
      title, desc,date, time,
      createdAt: new Date(),
      userid: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'reminderdata.remove'(reminderdataId) {
   check(reminderdataId, String);
 
    ReminderData.remove(reminderdataId);
  },

  'reminderdata.update'(reminderId, date1){
    check(reminderId, String);

    const update = { _id: reminderId, date: date1 };
    ReminderData.update(reminderId, { $set: update });

                    //ReminderData.update(update._id, { $set: update });

  },

  'reminderdata.setChecked'(reminderId, setChecked) {
    check(reminderId, String);
    check(setChecked, Boolean);

    ReminderData.update(reminderId, { $set: { checked: setChecked } });
  },

  'reminderdata.find'(reminderId, setChecked) {
    check(reminderId, String);
    check(setChecked, Boolean);

    ReminderData.update(reminderId, { $set: { checked: setChecked } });
  },
});
