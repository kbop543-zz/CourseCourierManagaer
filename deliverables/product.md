# Courier Course Manager / TEAM Mighty Moose

*******
#### Q1: What are you planning to build?

### Courier course manager is a simple way to organize your school goals

##### Automated
Given a minimal amount of information, just a syllabus, Courier can provide a schedule that can help you commit to schoolwork more reliably.

##### Adaptive to the individual
Courier allows for variable timeframes and schedule management based upon your educational goals and commitments.

##### Scalable, Helpful, Intuitive
Given the cloud based web app architechture, Courier can organize even the most busy schdules and people.

![timetable view prototype](https://github.com/csc301-winter-2017/project-team-11/blob/master/deliverables/Timetable_view_prototype.png "Early prototype of base timetable view")

Given the syllabi for multiple courses, Courier can dynamically schedule timeframes to work on each evaluation to meet the particular students needs. As the school term progresses, the student can update their marks for evaluations, and future work timeframes will adapt according to the percieved student needs. 
After initial configuration, Courier intends to be used as a simple, lightweight accompaniment to a students average workday. Allowing optional notifications for both course and instuctor updates, Courier can also provide vital information in a simple, digestable format. 

A sample mock up for Courier is available [here](https://marvelapp.com/2a3a6b6/screen/24775274)
*******

#### Q2: Who are your target users?

Not only can this application help students stay organized, but it also allows professors to dynamically manage coursework they assign to their students.

We are targetting to the average student, who wants to successfully manage their school and social life and stop mentally managing his course load, portrayed by [Nathan Campbell](https://app.xtensio.com/folio/58etyr0z).
We are also targetting to students with an above average workload who may find it hard to organize how to handle their immense work load such as <insert Student here>, the computer science student, and to students who may have a smaller than average workload such as <insert Student here>, the english major.

The instructors we are targetting to are committed to helping their students organize their work load. 
* Instructor Persona - Professor Pittain:

*******

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

#####Organize their course load
Users would choose our product because it allows them to easily organize, weigh  and chronologize their course load for all of their courses. It saves students the stress of looking at every single syllabus and having to write down everything for each course that is due by hand. This can be a time-consuming and exertive process. Our product takes that exhaustive process and turns it into the simple task of just uploading a syllabus. The chronological ordering of due dates will help students to avoid being surprised by deadlines that are coming up.

#####Plan when to work
The product will also suggest start dates for particular course tasks, either via a built in feature or through an instructor suggesting a start time. This will act as a guide for the student so they know when to start working on a specific task. Our product will also allow users to set reminders to start working on a task. This will help students to not forget about certain courses because our product can alert them even if they don't check our app periodically. These features will help the student lay down the specifics of how they should prioritize their work.

#####Easy calculation of grades
A user will be able to input the grades they get on certain assigned course tasks. Our product will calculate the grade and GPA they have in each course accordingly and incrementally. This will benefit students because they can see where they stand in their course quickly and easily without having to constantly recalculate their grade throughout the semester.  Depending on their grade, the user can also prioritize the course accordingly so that they ensure they are meeting their goals. 


*******

### Highlights

1. **Always check if your idea already exists.** Here are some of our ideas we thought were novel but had already been made:
    * A chrome extension that removes spoilers from your webpage
    * Pinterest for men
    * Grindr for queer women
    * A recipe maker
    * Seinfeld gif maker
2. **Don’t build something too complex.**
    * One idea we had was a textbook that a class would share with each other online, where they could highlight sections of it, and the app would create summaries of chapters based on what students were highlighting
	    * While the idea has definite value for students, creating a shared document for multiple people to annotate would take some time
	    * An even bigger challenge the app presents is the way to create summaries since natural language processing for information retrieval is a pretty challenging field of computer science
    * Another idea we had was for indoor directions inside UofT buildings
	    * This was another idea with obvious value for new students or students who need to find an examination room in a building they've never been to before
	    * Some challenges we had were that google maps doesn't have floor plans for every UofT building. There is a website where you can download blueprints of each floor of every UofT building, but you could only download the blueprint of one room at a time. In order to build something comprehensive, we would have to store thousands of blueprints, and then be able to intelligently move between different blueprints for the different floors and rooms
	    * One workaround we considered were physical beacons set up throughout every floor of building to help you navigate based on those. A similar workaround used QR code stickers spread throughout campus to give you a similar idea of where you were
	    * Both of these solutions were unfeasible because not only would we need to devise a system of communicating with these objects, we would have to buy/make them, and set them up.
3. **Don't building something that breaks the law.** Here's a list of ideas we came up with that had obvious value but weren't technically legal:
 * An online group for sharing metropasses
 * An app that tries dozens of default wifi passwords on all the available wifi networks around you
 * Uber for alcohol
4.  **Sometimes it can be useful to reframe your app ideas.** Our TAs suggested some ways that previous CSC301 students reframed their app ideas to target specific user groups and to elevate their app ideas beyond just entertainment
  * Telecounselling app that allows instant messaging and video calls between shy students who feel uncomfortable talking in-person and counsellors who don't have enough time to meet every student in-person
  * A physics tanks game that made players input projectile equations to hit opponents, thus teaching players about physics
  * A Wolfenstein/Doom-like videogame for blind people

Our current product plan for the course goal organizer came directly from these insights. As far as are research can determine, there isn't a similar product out there right now. Since our app focuses on goal-setting and scheduling, it is completely legal. Lastly, we restricted our prototype to just analyze one type of pdf template in order to reduce time and complexity of making the app. Instead of making a reader that can work for several different types of pdf templates, we plan to make our app work for one template, and get professors to use that template for their assignments.
