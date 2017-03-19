## Backend ##

-git clone the repository
-import into eclise as maven project (same as as assignments)

#### To run locally ####

-type 'brew install maven'

-run `mvn package` in the project/backend directory

-add the following lines to your bash profile by typing 'vim ~/.bash_profile'

    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/jre/bin:$PATH

-run `sh target/bin/webapp` or for windows `C:/> target/bin/webapp.bat`
then go to http://localhost:8080/ to see pretty server


OR

-run `heroku local web` ( [must have heroku cli set up locally](https://devcenter.heroku.com/articles/heroku-cli))

then go to http://localhost:5000/ to see pretty server

http://localhost:5000/calendar





## Need to figure this out ... ##

to push changes to a heroku webapp run " git push heroku master"
after having created a heroku application

-not working, idfk why, i get :

```
Counting objects: 5289, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3570/3570), done.
Writing objects: 100% (5289/5289), 4.53 MiB | 459.00 KiB/s, done.
Total 5289 (delta 1296), reused 5246 (delta 1284)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Failed to detect app matching no buildpack
remote:        More info: https://devcenter.heroku.com/articles/buildpacks#detection-failure
remote:
remote:  !     Push failed
remote: Verifying deploy...
remote:
remote: !	Push rejected to stark-beach-22485.
remote:
To https://git.heroku.com/stark-beach-22485.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/stark-beach-22485.git'
```
