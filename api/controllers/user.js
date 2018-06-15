const express = require ('express'); 
const User = require ('../models/userModels');
const bcrypt = require('bcrypt');


const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(response => res.json(response))
    .catch(error => res.status(500),json({ error: error.message }));
};

//   const newUser = new User ({ username, password });
//   newUser
//     .save()
//     .then(savedUser => {
//       res.status(201).json(savedUser); 
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message }); 
//     }); 
// };

module.exports = {
  createUser
};
