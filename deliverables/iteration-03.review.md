# Courier Course Manager / TEAM Mighty Moose

## Iteration 3 - Review & Retrospect

 * When: Thursday, March 23, 9 pm
 * Where: Everyone present online on google hangouts

## Process - Reflection

#### Decisions that turned out well

* Using Trello was a decision that turned out well because it gave us a better perspective on the high-level tasks that we still needed to complete. This helped us because we were able to assign high-level tasks to specific individuals who could then break the task up into smaller tasks. Now, our team uses git issues for low-level tasks and Trello for high-level ones. [Our trello is here](https://trello.com/coursecourier)

* The decision to respond to directed messages within 6 hours of being posted in Slack worked well, and really improved communication between group members. This allowed us to quickly determine what issues other members were facing during development. We could quickly share responsibilities with other group members who had more experience developing certain parts of the project.

#### Decisions that did not turn out as well as we hoped

* Originally, we used independent Java servlets to parse the uploaded syllabus file into a calendar object. We began looking into solutions so that data and and user information could be cross referenced within the backend. This over-complicated the design of the app and left some teammates doubtful of the direction that it was going. Instead, we parsed the syllabus file on the frontend with javascript. This simplified the app design because we didn’t have to pass the calendar object from a java backend to the frontend.[Original issue here](https://github.com/csc301-winter-2017/project-team-11/issues/26)

* It was difficult to have everyone consistently commit code changes every three days. Many group members had commitments to other classes, especially over the weekend, that prevented us to contribute as frequently as wished. This resulted in us not getting some features we wanted implemented for this iteration and also resulted in some group members doing way more work than others in order to complete other features. 

#### Planned changes


List any process-related changes you are planning to make (if there are any)

* We will have our first planning meeting on Friday, March 24th. In previous iterations, including this one, progress was stalled by having our planning meeting too late in the process. This change will clarify which team members are doing what earlier eliminating confusion and allowing us to get to work earlier.
* We are making a commitment to use Trello to organize our tasks. We realized how productive it was in this iteration because it allows us to assign tasks to groups of people easily and break down these tasks in a way that git issues doesn’t allow. 
* Formally schedule meeting times between subgroups who are working on similar parts of the project. Previously we divided groups up for assignments but work was being done on similar parts at the same time or people did not know what the others were doing. This will allow us to determine issues early on that prevent us from completing the subtask. Also, we can quickly figure out what parts of the project members are comfortable with, given the time until the planning meeting.


## Product - Review

#### Goals and/or tasks that were met/completed:

* [Display course info sorted by due date](https://github.com/csc301-winter-2017/project-team-11/issues/4) https://github.com/csc301-winter-2017/project-team-11/blob/master/deliverables/My%20Courses%20(1).png
* [Allow for multiple file upload](https://github.com/csc301-winter-2017/project-team-11/issues/32) 
* [Expand calendar objects to have end dates and locations and other useful attributes](https://github.com/csc301-winter-2017/project-team-11/issues/28)
* [Expand file upload so that it creates a JSON with all your classes](https://github.com/csc301-winter-2017/project-team-11/issues/27) 
* [Reliably connect backed to front end](https://github.com/csc301-winter-2017/project-team-11/issues/26) 
* [Support calendar file generation for multiple courses](https://trello.com/b/vn6knkIB/make-calendar-download-link-work-for-more-than-two-courses) 
* [Fix some formatting CSS issues](https://trello.com/b/noVtyHlu/fix-stying) 

#### Goals and/or tasks that were planned but not met/completed:

* Work on converting a PDF (of a fixed format) to a text file so you can regex the text file. When we tried to parse the text in the PDF, the website kept crashing so we will try to get it working in the last iteration.
 * Create backend Java objects to demonstrate backend functionality of the application. We decided to move our backend to javascript, so these Java objects were no longer needed. This allowed for easier communication between frontend and backend, eliminating need to call Java methods from frontend code.
* We wanted to add a functionality for a user to be able to manually add course tasks if their syllabus wasn’t in the format specified. However, we didn’t have enough time to add this feature for this iteration.
* Expand calendar file generation to include Google Calendar. We tried to import a calendar file generator library that Google Calendar will recognize. While the library worked in a java main method, we ran into problems when we tried to use the imported library in the backend java server.
* Create different user roles. This was a stretch goal and was not a high priority for this product. We are not implementing this feature in order to work on other features adequately. 

## Meeting Highlights

* We should be thinking about a presentable final product. Ensuring our frontend and backend works elegantly with each other and that the user has a pleasant experience with what we have created.
* There are still many unmet goals that we need to complete in the next week. The biggest two are a “grade calculator” feature that will tell the student their prospective grade in the course and a “suggested start time” feature that will suggest to the student when they should start an assignment.


