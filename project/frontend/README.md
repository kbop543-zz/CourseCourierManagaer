## Frontend ##

How to run project((NEW with database stuff))

-git clone the repository

*(For Mac Only):*
>-install homebrew by typing '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'

>-install node by typing 'brew install node'


-type 'npm install' in the terminal

-type 'export PATH=/u/csc309h/fall/pub/bin:$PATH' in terminal

*(For Mac Only):*
>Follow the mongoDB installation instructions here
http://treehouse.github.io/installation-guides/mac/mongo-mac.html
*(For Windows Only):*
>Follow the mongoDB installation instructions here
https://www.mkyong.com/mongodb/how-to-install-mongodb-on-windows/

-type 'mkdir data' in terminal

-type 'mkdir uploads' in terminal


***

-type  **mongod --dbpath=$PWD/data** in terminal ((DO NOT cd INTO DATA))

*Note:*
>If typing the above command returns and error like Invalid command: an/incomplete/path/of/your/current/directory, double check that none of the directories in your working directories have spaces in their names. Sometimes it works better to type **mongod --dbpath=data** instead.

>If typing the above command return and error like exception in initAndListen: 98 Unable to lock file: data/mongod.lock, double check that you don't have mongo process running currently by typing in terminal **ps aux | grep mongo**, finding the process id of your mongo process, and type **kill pid** with process id you foudn to kill that mongo process.

-open another terminal and cd into project/frontend folder and type  **nodemon server.js**

***


*Note:*
>If typing 'nodemon server.js' returns and error like Error: Cannot find module 'express-validator', try running 'npm install' again

-type 'http://127.0.0.1:3000/index' in your browser window

[to have it work with the backend follow the instructions on getting the backend server up and running](https://github.com/csc301-winter-2017/project-team-11/edit/master/project/backend/README.md)




ta da!




*FOLDER ORGANIZATION*

routes has the server code

models has the database code

assets has the css and javascript client side code
