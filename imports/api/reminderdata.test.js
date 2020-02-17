/* eslint-env mocha */
 
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

 
import { ReminderData } from './reminderdata.js';
 
if (Meteor.isServer) {
  describe('ReminderData', () => {
    describe('methods', () => {
      const userId = Random.id();
      let reminderId;
 
      beforeEach(() => {
        ReminderData.remove({});
        reminderId = ReminderData.insert({
          title: 'A test reminder',
          desc: 'Description of test Reminder',
          date: '2020-02-17',
          time: '02:00',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });
 
      it('can delete owned reminder', () => {
      
        const deleteReminder = Meteor.server.method_handlers['reminderdata.remove'];
 
        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };
 
        // Run the method with `this` set to the fake invocation
        deleteReminder.apply(invocation, [reminderId]);
 
        // Verify that the method does what we expected
        assert.equal(ReminderData.find().count(), 0);
      });
    });
  });
}