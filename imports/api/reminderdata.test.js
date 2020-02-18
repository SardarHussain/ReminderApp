
import { Meteor } from "meteor/meteor";
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { ReminderData } from './reminderdata.js';

if (Meteor.isServer) {

    describe('ReminderData', function() {
        describe('methods', function() {

            // create a reminder

            const userId = Random.id();
            let reminderId;
            
            beforeEach(function () {
                ReminderData.remove({});
                reminderId = ReminderData.insert({
                  title: 'test title',
                  desc: "test description",
                  date: "2020-02-20",
                  time: "22:00",
                  checked: false,
                  username: 'Gul',
                  createdAt: new Date(),
                  userid: userId

                });
               
              });

            // check if you can delete reminder
            it('can delete owned reminder', function(){
                // Find the internal implementation of the task method so we can
                // test it in isolation
                const deleteReminders = Meteor.server.method_handlers['reminderdata.remove'];

                // Set up a fake method invocation that looks like what the method expects
                const invocation = { userId };

                // Run the method with `this` set to the fake invocation
                deleteReminders.apply(invocation, [reminderId]);

                // Verify that the method does what we expected
                assert.equal(ReminderData.find().count(), 0);
            });

            // check if you can edit the reminder
            it("can edit owned reminder", function(){
                const someDate = "2020-02-28"
                const someDescription = "somedesc"
                const editReminders = Meteor.server.method_handlers["reminderdata.update"];

                editReminders(reminderId, someDate);

                assert.equal(ReminderData.find({_id: reminderId, date: someDate}).count(), 1);

            });
                //check if you can update the reminder to be checked
            it("can set reminder to checked", function(){
                const checked = true;
                const setChecked = Meteor.server.method_handlers["reminderdata.setChecked"];

                setChecked(reminderId, checked);

                assert.equal(ReminderData.find({checked: true}).count(), 1);

            });
        });
    });

}