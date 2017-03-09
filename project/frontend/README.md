"# project-team-11" 

How to run project((NEW with database stuff))

-git clone the repository

*(For Mac Only):*
>-install homebrew by typing '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'

>-install node by typing 'brew install node'

- `sudo npm install --global gulp`

-type 'npm install' in the terminal

-type 'export PATH=/u/csc309h/fall/pub/bin:$PATH' in terminal

*(For Mac Only):*
>Follow the mongoDB installation instructions here
http://treehouse.github.io/installation-guides/mac/mongo-mac.html

*(For Windows Only):*
>Follow the mongoDB installation instructions here
https://www.mkyong.com/mongodb/how-to-install-mongodb-on-windows/

-type 'mkdir data' in terminal 

-type 'mongod --dbpath=$PWD/data' in terminal ((DO NOT cd INTO DATA))

-open another terminal and cd into project folder

-type 'nodemon index.js' in the terminal

*Note:*
>If typing 'nodemon index.js' returns and error like Error: Cannot find module 'express-validator', try running 'npm install' again

-type 'http://127.0.0.1:3000/' in your browser window


OR

-type `gulp` in terminal (UNDER CONSTRUCTION)


ta da!




*FOLDER ORGANIZATION*

routes has the server code

models has the database code

assets has the css and javascript client side code
