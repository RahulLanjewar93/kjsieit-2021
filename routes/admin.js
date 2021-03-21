const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validateUser} = require('../middleware')
const { signup,signin } = require('../controllers/auths')
const { addAgent } = require('../controllers/admin')

router.post('/signin',validateUser,signin)

router.post('/addAgent',addAgent)



module.exports = router