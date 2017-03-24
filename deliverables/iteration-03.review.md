# Courier Course Manager / TEAM Mighty Moose

## Iteration 3 - Review & Retrospect

 * When: Thursday, March 23, 9 pm
 * Where: Everyone present online on google hangouts

## Process - Reflection

#### Decisions that turned out well

* Using Trello was a decision that turned out well because it gave us a better perspective on the high-level tasks we still needed to complete. We were able to assign high-level tasks to specific individuals who could then break the task up into smaller tasks. This also makes it easier to write github issues because we have a clearer idea of what the github issues should be given the high level tasks. Also, Trello allowed us to colour coordinate our issues, so we used this feature to  specify which tasks belonged to which iteration thus this allowed us to plan for the last iteration [Our trello is here.](https://trello.com/coursecourier)

* The decision to respond to directed messages within 6 hours of being posted in Slack worked well, and really improved communication between group members. This allowed us to quickly determine what issues other members were facing during development. We could quickly share responsibilities with other group members who had more experience developing certain parts of the project and debug with them.

#### Decisions that did not turn out as well as we hoped

* Originally, we used independent Java servlets to parse the uploaded syllabus file into a calendar object. We began looking into solutions so that data and and user information could be cross-referenced within the backend. This over-complicated the design of the app and left some teammates doubtful of the direction that it was going. Ultimately we ended up changing a majority of the code base, we parsed the syllabus file on the frontend with javascript. This simplified the app design because we didn’t have to pass the calendar object from a java backend to the frontend. [The original git issue is here.](https://github.com/csc301-winter-2017/project-team-11/issues/26)

* Using git issues did not work out well for this iteration because tasks needed to be outlined in greater detail, and GitHub issues doesn’t allow us to break down issues into smaller tasks. So, we decided to switch to Trello to list high level issues and specify even smaller subtasks within these issues. [An example of this is our ‘fix styling’ board which was broken down into smaller tasks.](https://trello.com/b/noVtyHlu/fix-stying). Github issues also didn’t allow us to differentiate between the different high level tasks we wanted to get done between iterations so this lack of coordination left us unprepared of what was left to get done for the project.

#### Planned changes

* We will have our first planning meeting on Friday, March 24th at 5 pm, right after after this iteration is due. In previous iterations, including this one, progress was stalled by having our planning meeting too late in the process. This change will clarify which team members are doing what earlier eliminating confusion and allowing us to get to work earlier.
* We are making a commitment to use Trello to organize our tasks. We realized how productive it was in this iteration because it allows us to assign tasks to groups of people easily, sort the tasks into different iterations, and break down these tasks in a way that git issues just doesn’t allow. 
* We want to formally schedule meeting times between subgroups who are working on similar parts of the project. Previously, we paired up developers to tackle harder tasks. Since the two team members were working independently of one another, the same work sometimes got done twice. This will allow us to avoid redundantly doing of work someone else is already handling. We can also quickly figure out what parts of the project members are comfortable with, given the time until the planning meeting.


## Product - Review

#### Goals and/or tasks that were met/completed:

* [Display course info sorted by due date](https://github.com/csc301-winter-2017/project-team-11/issues/4) ([An example Mockup of our My Courses page that we used to guide us](https://github.com/csc301-winter-2017/project-team-11/blob/master/deliverables/My%20Courses%20(1).png))
* [Allow for uploading multiple syllabus files](https://github.com/csc301-winter-2017/project-team-11/issues/32) 
* [Expand calendar objects to have end dates, locations, and other useful attributes](https://github.com/csc301-winter-2017/project-team-11/issues/28)
* [Expand file upload so that it creates a JSON file with all the user's courses](https://github.com/csc301-winter-2017/project-team-11/issues/27) 
* [Reliably connect the backend to the frontend](https://github.com/csc301-winter-2017/project-team-11/issues/26) 
* [Support calendar file generation for multiple courses](https://trello.com/b/vn6knkIB/make-calendar-download-link-work-for-more-than-two-courses) 
* [Fix some formatting CSS issues](https://trello.com/b/noVtyHlu/fix-stying) 

#### Goals and/or tasks that were planned but not met/completed:

* We need to convert a PDF (of a fixed format) to a text file, as a syllabus is usually given as a pdf. Right now the regex parser algorithm will only work with a text file. This task was not completed because when we tried to get convert pdf into text using npm modules, the website kept crashing. We will try to get this working in the last iteration.
* Create backend Java objects to demonstrate backend functionality of the application. This task did not get completed because we decided to move our backend to javascript, so these Java objects were no longer needed. This allowed for easier communication between the frontend and the backend, eliminating the need to call Java methods from the frontend code.
* Add functionality for the user to be able to manually add course tasks if their syllabus wasn’t in the format specified. We didn’t have enough time to add this feature for this iteration.
* Expand calendar file generation to be imported by Google Calendar. We tried to import a calendar file generator library that Google Calendar recognizes. While the library worked in a java main method, we ran into problems when we tried to use the imported library in the backend java server.
* Create different user roles. This was a stretch goal and was not a high priority for this product. We are not implementing this feature in order to work on other features adequately. 

## Meeting Highlights

* We should be thinking about creating a presentable final product. We need to ensure that our frontend and backend works elegantly with each other and that out website is intuitive to use. Thus, we want to change the start up page of our website and reformat some of the layout to ensure our website is easier to use.
* There are still many unmet goals that we need to complete in the next week. The two biggest goals are a “grade calculator” feature that will tell the student their prospective grade in the course and a “suggested start time” feature that will suggest to the student when they should start an assignment. We have set out a two-tiered approach to achieving this.
[Our primary goal is to have suggestions on when to start an assignment directly correlated with the weight of the given assignment.](https://github.com/csc301-winter-2017/project-team-11/blob/master/deliverables/ReccomendedStartTimeGoal1.png) [Our secondary goal is to implement these suggestions on extrenal factors such as overalapping assignments, holidays, etc.](https://github.com/csc301-winter-2017/project-team-11/blob/master/deliverables/ReccomendedStartTimeGoal12.png)


