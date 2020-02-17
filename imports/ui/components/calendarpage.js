
import { Tracker } from 'meteor/tracker';
import { moment } from 'meteor/momentjs:moment';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { ReminderData } from '../../api/reminderdata.js';


import './calendarpage.html';


Template.calendarPage.onCreated(() => {
    Template.instance().subscribe('reminderdata');
  });

  Template.calendarPage.onRendered(() => {
    // Initialize the calendar.
    
    $('#event-calendar').fullCalendar({
      // Define the navigation buttons.
    
      header: {
        left: 'prev, next today',
      center: 'title',
      right: 'month, agendaWeek, agendaDay'
      },
      
      editable: true,
      // Add a reminder to the calendar.
      events(start, end, timezone, callback) {

        const data = ReminderData.find({userid: Meteor.userId()}).fetch().map((session) => {
          
          return session;
        });
  
        if (data) {
          callback(data);
        }
      },
  
      // Configure the information displayed for a reminder as an event
      eventRender (session, element)  {
        element.find('.fc-content').html(
            `<p class="title">${session.title}</p>
            <p class="time">${session.time}</p>
            `,
        );
       
      },

      //When an event [reminder] is dragged from one date to another
      eventDrop (session, delta, revert) {
              const date1 = session.start.format();
              const _id= session._id;
              
              //const update = { _id: session._id, date: date1 };
              Meteor.call('reminderdata.update', _id, date1)
                // Update the date of the reminder.
               
                //ReminderData.update(update._id, { $set: update });
               
            },
  
      // Triggered when a day is clicked on.
       dayClick (date) {
        
        //To be implemented to get user input data via dialoge box
      }, 
  
      
      //Display details of the reminder when clicked 
      eventClick(event) {
                 alert("Reminder title: " + event.title + "\nReminder description: "
                  + event.desc + "\n Reminder time: " + event.time);
                  //moment(event.start).format("hh:mm A"));
             },      
    });
  
    // Updates the calendar if there are changes.
    Tracker.autorun(() => {
      ReminderData.find().fetch();
      $('#event-calendar').fullCalendar('refetchEvents');
    });
  });
  
