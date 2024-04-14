// steps 
//  create a folder for project: mkdir folder name 
// then npm install express mongoes cors dotenv nodemon 




// set route error
// set server error



// ------------------------------------------------------------------------
// to get data form DB you need a scama for create a scama 
// create a file users.model.js

// after connect to DB need ==> schema 
// create a file models folder $.model.js
// 1. import mongoose
// 2. use a variable to call schema form mongoose
// exm: const userScheme = mongoose.Schema({})
// 3. in Schema create a object to name => type, require, default
// 4. export that as ===> mongoose.model("#collectionName", followingSchema)
//-----------------------------------------------------------------------------

// --------------user controller for logic ---------
// 1. import schema
// emp: const User = require('./models/users.model')
// 2. import uuid for create unique id
// 3. user try & catch in create user with async/await
// 4. in try set a variable name newUser and put all value as obj i. e. email: req.body.email
// 5. await newUser.save();
// 6. res.status(201).json(newUser)
// 7. in catch (error){ res.status(500).send(error.message)}




// --------Get all users -------------------
// 1. in controller variable getAllUsers async -> const users = await User.find(); -> res.send....

// -----------------Get one user by ID---------
// ===> in -> Controller 
// 1. Use async await & try catch method 
// 2. in try set a variable as user to findOne method 
// example: const user = await User.findOne({ id: req.params.id}) and send the user.

// ====> in router 
// 1. set a route to get("/:id", getOneUser) 
