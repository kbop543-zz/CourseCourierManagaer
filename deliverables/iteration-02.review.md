# Courier Course Manager / TEAM Mighty Moose


## Iteration 2 - Review & Retrospect

 * When: March 9, 2017
 * Where: Everyone online on a Google Hangout and writing within Slack

## Process - Reflection

For the most part, everyone made progress on their given task: The login and sign up functionalities have been done, the syllabus parser algorithm works for up to one file, the calendar can output calendar objects given a json file and we have a functional UI that works with the user signing up and logging in. 


#### Decisions that turned out well

* The decision to use servlets within the existing java backend files was an effective way of parsing our text file, parsing the json that outputs, and returning a .ics file. It also helped us cuz we weren't sure how we would integrate our original java files (syllabus parser, calendar file creation) in with our web app. Serlets allowed for us to import these files.
* Our decision to use open issues on GitHub to assign tasks to group members was an efficient way to divide tasks (when multiple people were assigned to an issue, multiple people collaborated). [See here (https://github.com/csc301-winter-2017/project-team-11/issues)]
* Our decision to divide tasks between frontend and backend ,which were written in different languages, to make use of the fact that most people knew Java so that everyone got a chance to do something in a language they were familiar in.  

#### Decisions that did not turn out as well as we hoped

 * We wanted to have an in person meeting in this iteration. However this did not happen. Although we were able to meet over Google Hangouts, it was challenging when multiple people spoke at once.
 * We wanted to work on the project during reading week. However, not everyone did this. The majority started working on their parts later than we planned, so combining everything together at the last-minute was challenging.
* Following the gitflow workflow. We had some members upload directly to the master, instead of forking their repository of their branch.


#### Planned changes


* Review and commit code at least once every 3 days. In this iteration, we had a week where no code was updated to github which made work for this iteration more rushed than it needed to be.
* Be more open with communicating problems with that might be occurring to the team. One challenge we had during this iteration was keeping in communication with the rest of the team. If our communication is more open and frequent, then when team members hit any roadblocks in development or if they are busy with other responsibilities, they could let the rest of the team know and the team wouldn’t be confused or left hanging.
* Update git issues more regularly with progress and close issues when significant progress is made.
* Make merges have more meaningful commit messages to the head. Many commits were vague and difficult to know what was added or changed


## Product - Review

#### Goals and/or tasks that were met/completed:

* We have a functional UI and styling for the frontend of the website
* The signup process for the user and login works. As a user signs up, they successfully get added to the database
* The syllabus parser algorithm works for up to one file and outputs out a json file for the frontend to use. 
* The algorithm for parsing a JSON file to a calendar file works
* Outputted the calendar file through the get method of the "/calendar" endpoint for easy integration to the front end.

#### Goals and/or tasks that were planned but not met/completed:
 
* The frontend and backend are currently separated. Both work but need to be integrated into each other. The frontend cannot currently show the calendar or JSON objects. It took a while before we got the format for those objects and as such we ran out of time.
* The syllabus parser algorithm only works for one file. We didn't have enough time to add a functionality that would make sure it can parse multiple files and organize the course tasks accordingly.
* Parts of the UI do not look presentable, some added functionalities affected the styling in ways we were not anticipating.

## Meeting Highlights

Going into the next iteration, our main insights are:

* We will as a group finalize the features in our application - what the user can do, how the user navigates the application, what roles do users play and how the user’s role(student vs. teacher) influences their experience with the application.
* Integrate the front-end and back-end so that the user can navigate the app normally
* Our group will start working earlier to leave more time to connect all the parts at the end


