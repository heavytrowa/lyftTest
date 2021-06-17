# lyftTest
This code is used for the Application of Lyft 2021 Software Engineering Apprenticeship. I use Node (express) and some basic html to finish the work.
You would need node installed for the code.

1. git clone this repo

2. run npm init in this repo

3. run npm install express

4. You can use npx live-server test.html for serving the frontend. Use node app.js for running the backend server.

5. In the frontend, you could type in the argument for "string_to_cut", then when you click the button, it'll create a post request to the backend server
(which is on localhost:3000/test) and you'll see the reponse of "return_string" and a string containing every third letter from the original string

6. you could also test out the server with the curl function
curl -X POST -d "string_to_cut=qwe"  http://localhost:3000/test 
you can replace qwe to anything you want
