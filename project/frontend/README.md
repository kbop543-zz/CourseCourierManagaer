"# project-team-11" 

How to run project((NEW with database stuff))

-git clone the repository

*(For Mac Only):*
>-install homebrew by typing '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'

>-install node by typing 'brew install node'

-type 'npm install' in the terminal

-type 'export PATH=/u/csc309h/fall/pub/bin:$PATH' in terminal

-type 'mkdir data' in terminal 

-type 'mongod --dbpath=$PWD/data' in terminal ((DO NOT cd INTO DATA))

-open another terminal and cd into project folder

-type 'nodemon index.js' in the terminal

-type 'http://127.0.0.1:3000/' in your browser window


ta da!




*FOLDER ORGANIZATION*

routes has the server code

models has the database code

assets has the css and javascript client side code
