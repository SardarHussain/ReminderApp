import { Template } from 'meteor/templating';
//import { Reminders } from '../../api/reminders.js';
//import { ReminderData} from '../../api/reminderdata.js';
import { Session } from 'meteor/session';


import './reminder.html';

Template.reminder.events({

    'click .toggle-checked'(){
        //set the checked property to the opposite of its current value
        Meteor.call('reminderdata.setChecked', this._id, !this.checked);
        

    },
    'click .delete' () {
      Meteor.call('reminderdata.remove', this._id);

    },

    'submit .edit-reminder'(event) {
      //'submit .new-reminder'(event) 
       
        event.preventDefault();
        
        //Get value from the form element
        const target = event.target;
        const title = target.title.value;
        const desc = target.desc.value;
        const date = target.date.value;
        const time = target.time.value;
        Meteor.call('reminderdata.remove', this._id);

      
        //insert a reminder into the collection
      
        Meteor.call('reminderdata.insert', title, desc, date, time);
      
        // clear form
        target.title.value='';
        target.desc.value='';
        target.date.value='';
        target.time.value='';
      },
    
});




Template.addReminder.events({
  'submit .new-reminder'(event) {
//'submit .new-reminder'(event) 
 
//prevent derault browser form submit
  event.preventDefault();
  
  //Get value from the form element
  const target = event.target;
  const title = target.title.value;
  const desc = target.desc.value;
  const date = target.date.value;
  const time = target.time.value;


  //insert a reminder into the collection

  Meteor.call('reminderdata.insert', title, desc, date, time);

  // clear form
  target.title.value='';
  target.desc.value='';
  target.date.value='';
  target.time.value='';
},
});


