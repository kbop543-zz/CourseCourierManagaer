# Courier Course Manager / TEAM Mighty Moose

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration XX

 * When: Monday, February 27, 2017, 8 pm
 * Where: Whole team in Bahen tutorial room with some people on line

## Process

We discussed what exactly we want to showcase in our video and how we can break down what needs to get done so everyone has a part to do. We decided that we want a user to be able to sign in, upload a text file that would represent a syllabus, create a export calendar file that has the dates the course tasks that are due and display the course tasks in the web app in a table format with the course name, weight of the course task and date the course task is due. 

#### Roles & responsibilities

* User Session Maintainers: Kyra and Hari will set up the database for users and use the express session api to maintain user sessions. Each user will have their course task calendar/table associated with their email. 
* Front End Designers: Jeremy will primarily work on the html and css part of the project. He will format how the website should look when a user signs in.
* Text File Parse Manager: Filip, Hari, Taha will work on how the text file should be parsed to organize the course tasks for each course.

#### Events

* We had a very unofficial quick meeting on Feb 13th via google hangouts where we decided everyone shoudl research on potential ways we can parse a text file to create a table where each course task from a syllabus is displayed with the course it is associated with, weight of it and the date it is due.
* This official planning meeting had Filip, Kyra and John in person within the tutorial while Hari, Taha and Jeremy were on google hangouts for this official planning meeting. 
* We will have another meeting at Friday, March 3 at 4:00 -4:30 pm to check in on what everyone has done so far and how we can merge it into the master branch.
* We want to have everyone finished their parts completed by Tuesday , March 7th. We will have a google hangout meeting to tie up loose ends and plan how to do our demo video from there.

Describe meetings (and other events) you are planning to have:
 * When and where? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

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


List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-do lists, Task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

#### Git / GitHub workflow

Everyone will fork their own version of the project. For each persons section, they would have their own branch they would work on. Example, Kyra and Hari would have their own branch and one person from that section would merge the changes into the master branch. Everyone will pull from the master branch to work on their own section of the project. We chose to use this workflow because ....

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.



## Product

#### Goals and tasks

Goals:

* Be able to convert text file to table object with all course tasks from syllabuses
   * Tasks:
   
* Create a sign up and login page
  * Tasks:
  
* Be able to upload a text file and download a calendar export
   * Tasks:
 
* Have a functionable UI
   * Tasks:
   
 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

* Create a sign up and login view

* Create a view where a user can upload a text file

* Create a view where a user can display their course tasks in a table format

* Create a downloadable calendar export link after the text file is uploaded



 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.
