# Courier Course Manager / TEAM Mighty Moose


## Iteration 2

 * When: Monday, February 27, 2017, 8 pm
 * Where: Whole team in Bahen tutorial room with some people online

## Process

We discussed what exactly we want to showcase in our video and how we can break down what needs to get done so everyone has a part to do. We decided that we want a user to be able to sign in, upload a text file that would represent a syllabus, and receive a calendar file of the tasks and a basic table of their schedule in the web app. Both the calendar file and the table show important task information: name, weight of the course, and due date.

#### Roles & responsibilities

* User Session Maintainers: Kyra will set up the database for users and use the express session api to maintain user sessions. Each user will have their course task calendar/table associated with their email. 
* Front End Designers: Jeremy will primarily work on the html and css part of the project. He will format how the website should look when a user signs in.
* Text File Parse Manager: Filip, Hari, Taha will work on how the text file should be parsed to organize the course tasks for each course.
* Calendar Manager: John will work on outputing the calendar files given a json file.

#### Events

* We had a very unofficial quick meeting on Feb 13th via google hangouts where we decided everyone should research on potential ways we can parse a text file to create a table. This table would have each course task from a syllabus displayed with the course it is associated with, weight of it and the date it is due.
* This official planning meeting had Filip, Kyra and John in person within the tutorial while Hari, Taha and Jeremy were on google hangouts for this official planning meeting. 
* We will have another meeting on Friday, March 3 at 4:00 -4:30 pm to check in on what everyone has done so far and how we can merge it into the master branch.
* We want to have everyone finished their parts completed by Tuesday , March 7th. We will have a google hangout meeting to tie up loose ends and plan how to do our demo video from there.


#### Artifacts

We used github issues to assign tasks. People joined the issue based on their assigned roles and responsibilites.

The issues we created in github was:
* Create Video Showcasing Functionality
* Develop Front-End for User Creation Page
* Develop Back-End for User data (user objects with user data)
* Develop Backend Code to Authenticate User and "Retrieve" User Calendars
* Front End Style
* Develop Code to Read Text file input and Parse into Internal Objects.
* Develop Front-End to Add Calendar
* Develop Front-End to View Calendar
* Event Objects to Exported Calendar File


For this iteration, we assigned tasks based on everyone's strengths.
Jeremy and Kyra are familiar with web development so they will work on UI, Server implementation and creating RESTful API's.
Hari, Jeremy and Taha will build the syllabus parser algorithm using Java because they are most familiar with building programs in the Java language.
John will convert the json returned by the syllabus parser using Java because he is also familiar with building programs in the Java language and has experience using a calendar making API.



#### Git / GitHub workflow

Everyone will fork their own version of the project. For each persons section, they would have their own branch they would work on. Example, Hari, Filip and Taha would have their own branch and one person from that section would merge the changes into the master branch. Everyone will pull from the master branch to work on their own section of the project. 
We chose to use this workflow because it ensures everyone who is working on the same task is on the same page and can resolve conflicts internally rather than on the master branch. 


## Product

#### Goals and tasks

Goals:

* Be able to convert text file to table object with all course tasks from syllabuses
   #### Tasks: 
   - establish a template the syllabus should be written in
   - read file in given template
   - write algorithm to manipulate the read information using regex
   - output json file of parsed manipulated regex groups
   
* Create a sign up and login page
  #### Tasks:
  - set up mongodb, express and express sessions in node.js
  - handle inputted user data from the user when signing in and make a user object
  - when a user logs in, find the user object in the database and keep them signed in
  
* Be able to upload a text file and download a calendar export
   #### Tasks:
   - parse the outputted json file
   - create a calendar api for handling the json data that outputs a .ics file
 
* Have a functionable UI
   #### Tasks:
   - design 'sign up', 'login in', 'upload syllabus' and 'about' view
   - make website responsive
   
   
   
 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

* Create a sign up and login view so that users can have a way to easily retrieve their data associated with the site

* Create a view where a user can upload a text file so that the functionality to upload a syllabus is publicly accessible whether a user is signed in or not.

* Create a view where a user can display their course tasks in a table format so that course tasks can be displayed in a simple way.

* Create a downloadable calendar export link after the text file is uploaded so that a user can put the deadline of their course tasks on the calendar of their phone, computer, etc.



