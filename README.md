<h1 align="center">REST SERVER</h1>

BackEnd application built with Node.js that performs a CRUD on a MongoDB database.The project was carried out with `Node v18.17.0`

<h2>Install packages and libraries</h2>

To run the project it is necessary to open the terminal and execute the `npm i` or `npm install` command which will install all the libraries and packages used.

<h2>Run project</h2>

To run the project it is necessary to open the terminal and execute the command "npx nodemon app" and wait for the terminal to display the message `Port:8080` and `Connected to MongoDB`

<h2>Make requests to the database</h2>

To make the GET request from a local server using postman or insomnia it is necessary to write in the url `http://localhost:8080/api/users`

<h4>GET Request</h4>

Send as parameters `start` and `limit` which are optional with a numerical value assigned by default

<h4>POST Request</h4>

Send `name, password, email, role` which are mandatory to create the user

<h4>PUT Request</h4>

Send as parameter `id`, which will be updated in the database if it exists

<h4>DELETE Request</h4>

Send as parameter `id`, which will change its `state` property to false with which the list of the GET method will be filtered to show only those that contain the `state:true` property, producing an elimination from the list but not of the database physically
