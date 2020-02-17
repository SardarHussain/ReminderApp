# ReminderApp

A simple Reminder Application:
This is a simple reminder application that integrates Meteor 1.9, Blaze and a fullcalener [other auxilary packages used are mentioned in the packages file].

This is a simple assignment type application  and help and support is taken from various online videos/tutorials and example applications including the todos app from
the meteor official web page and for full calendar the online available application of chadmorita from github.com.
This application has the following functionalities:
1. user registration: As user must be registered to use this app, the metoer available package for the account/username is used.
2. After loging in it displays a simple form a fullcalendar and a list of reminders if the user has already created them.
3. Once the user creates a reminder it is displayed on the fullcalendar and added to the reminders list as well.
4. The user can edit, and delete a reminder from the list. 
5. The fullcalendar displays the reminders showing the title and time of the reminders. The reminders are displayed (date wise) in ascending order in the list.
6. A user can drag and drop a reminder from one date to another.
7. when a user clicks on a reminder on the fullcalendar, a popup window shows the title, description and time of the reminder.
8. Users can only see and edit their own reminders. 


Installation

Installation
First install Meteor and then execute the following commands.
 Enter into the root  directory of this applicatn and then execute:

meteor npm install

To start the application execute this command:
meteor run
