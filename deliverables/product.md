# Courier Course Manager / TEAM Mighty Moose

 > _Note:_ This document is meant to evolve throughout the planning phase of your project.    
 > That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section).

#### Q1: What are you planning to build?

YOUR ANSWER GOES HERE ...

*******
##### Courier course manager is a simple way to organize your school goals.
**Automated**
Given a minimal amount of information, such as a syllabus, Courier can provide a schedule that can help you commit to schoolwork more reliably.

**Adaptive to the individual**
Courier allows for variable timeframes and scheudle management based upon your educational goals and commitments.

**Scalable, Helpful, Intuitive**
Given the cloud based web app architechture, Courier can organize even the most busy schdules and people.

*******

 * Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app,
   browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.


#### Q2: Who are your target users?

YOUR ANSWER GOES HERE ...

 * Short (1 - 2 min' read max)
 * Be specific (e.g. )
 * Feel free (but not obligated) to use personas.        
   You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

YOUR ANSWER GOES HERE ...

 * Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)


----

### Highlights

1. **Always check if your idea already exists.** Here are some of our ideas we thought were novel but had already been made:
    * A chrome extension that removes spoilers from your webpage
    * Pinterest for men
    * Grindr for queer women
    * A recipe maker
    * Seinfeld gif maker
2. **Don't build something too complex.**
    * One idea we had was a textbook that a class would share with each other online, where they could highlight sections of it, and the app would create summaries of chapters based on what students were highlighting
	    * While the idea has definite value for students, creating a shared document for multiple people to annotate would take some time
	    * An even bigger challenge the app presents is the way to create summaries since natural language processing for information retrieval is a pretty challenging field of computer science
    * Another idea we had was for indoor directions inside UofT buildings
	    * This was another idea with obvious value for new students or students who need to find an examination room in a building they've never been to before
	    * Some challenges we had were that google maps doesn't have floor plans for every UofT building. There is a website where you can download blueprints of each floor of every UofT building, but you could only download the blueprint of one room at a time. In order to build something comprehensive, we would have to store thousands of blueprints, and then be able to intelligently move between different blueprints for the different floors and rooms
	    * One workaround we considered were physical beacons set up throughout every floor of building to help you navigate based on those. A similar workaround used QR code stickers spread throughout campus to give you a similar idea of where you were
	    * Both of these solutions were unfeasible because not only would we need to devise a system of communicating with these objects, we would have to buy/make them, and set them up.
3. **Be wary of making apps that break the laws.** Here's a list of ideas we came up with that had obvious value but weren't technically legal:
 * An online group for sharing metropasses
 * An app that tries dozens of default wifi passwords on all the available wifi networks around you
 * Uber for alcohol
4. **Sometimes it can be useful to reframe your app ideas.** Our TAs suggested some ways that previous CSC301 students reframed their app ideas to target specific user groups and to elevate their app ideas beyond just entertainment
  * Telecounselling app that allows instant messaging and video calls between shy students who feel uncomfortable talking in-person and counsellors who don't have enough time to meet every student in-person
  * A physics tanks game that made players input projectile equations to hit opponents, thus teaching players about physics
  * A Wolfenstein/Doom-like videogame for blind people

Our current product plan for the course goal organizer came directly from these insights. As far as are research can determine, there isn't a similar product out there right now. Since our app focuses on goal-setting and scheduling, it is completely legal. Lastly, we restricted our prototype to just analyze one type of pdf template in order to reduce time and complexity of making the app. Instead of making a reader that can work for several different types of pdf templates, we plan to make our app work for one template, and get professors to use that template for their assignments.