# Courier Course Manager / TEAM Mighty Moose

## Iteration 3

 * Start date: Thursday, March 16, 2017, 5 pm
 * End date: Friday, March 24, 2017, 4 pm
 * Where: All members of the team online, through Google Hangouts

## Process

#### Changes from previous iteration

* List high-level requirements for our product, so that everyone in the group has a good sense of our team’s goals. This way, every team member will develop code towards a common goal, instead of developing code for requirements that might be unnecessary for the end product. This will also resolve conflicts between code developed by different group members. Success metric: a high-level diagram of the entities and relationships in our assignment will be created by Tuesday.
* Review and commit code at least once every 3 days. This will allow more discussion and refinement and a better product at the end of the iteration. This will also prevent conflicts of ideas between group members, and can prevent merge conflicts. Success metric: Every group member has reviewed code for their segment of the assignment (hopefully a commit, if only a review, create inline comments regarding current progress) every three days.
* Be more open with communicating with other members about development issues that might be occurring, through the use of slack, as well as more verbose code commenting. If our communication is more open and frequent, then when team members hit any roadblocks in development or if they are busy with other responsibilities, they could let the rest of the team know and the team wouldn’t be confused or left hanging. Success metric: a targeted issue (using @user) on slack should be addressed within the same day (max 6 hours).

#### Roles & responsibilities

* User Session Maintainers: Kyra will set up the database for users and use the express session api to maintain user sessions. Each user will have their course task calendar/table associated with their email.
* Front End Designers: Jeremy will primarily work on the html and css part of the project. He will format how the website should look when a user signs in.
* Text File Parse Manager: Filip, Hari, Taha will work on how the text file should be parsed to organize the course tasks for each course.
* Calendar Manager: John will work on outputing the calendar files given a json file.


#### Events

Describe meetings (and other events) you are planning to have:

 * We will continue to host meetings online via Slack and Google Hangouts 
 * Online on Mondays at 8 pm during tutorial and Thursdays at 5 pm
 * In addition, we will have online meetings on the weekend for the backend and frontend groups

#### Artifacts

* Github issues will be our main method of showing progress and how we assigned roles for this iteration        
* Maintain Slack Chat logs to show discussion between members during this iteration.
* Diagram showing entities and responsibilities to illustrate the main structures of our application.

#### Git / GitHub workflow

* Members will maintain personal branches and ensure when they merge to the master that their code will not conflict with others’ contributions. If members were to directly upload to the head then it is highly likely the code will be buggy or not work at all.
* Continue to use github issues to show progress on different aspects of the project. This will prevent multiple people from working on the same problem and wasting time.
* If any design changes occur, update any relevant README files and notify the group of such 
change

## Product

#### Goals and tasks

* Work on converting a PDF (of a fixed format) to a text file so you can regex the text file
* Expand calendar objects to have end dates and locations and other useful attributes
* Expand file upload so that it creates a JSON with all your classes
* Reliably connect backed to front end
* Create backend Java objects to demonstrate backend functionality of the application (may not be incorporated in final product).
* (If time permits) Create different user roles (students, teachers).
* Expand calendar file generation to include google calendar
* Support calendar file generation for multiple courses
* Expand calendar file generation to support locations, and end times
* Add manual course through form
* Display course info
* Fix some formatting CSS issues
* Upload multiple files

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.
* A video displaying the functional frontend of the website from the user’s perspective
* Entity/Relationship diagrams and SPN data-flow models to show the structures and workflow of our application. 
* Mockups for the UI to show our process of how we tackled design difficulties.
* Bring up a live hosted server on heroku for the backend, in order to prepare for full website deployment.

