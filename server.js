const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { userModel, eventModel } = require('./database/config/index');
const jwt = require('jsonwebtoken')

const authMiddleware = require('./middlewares/authMiddleware')

const authController = require('./controllers/authController');
const authService = require('./services/authService');
const tokenMiddleware = require('./middlewares/tokenMiddleware')
const eventController = require('./controllers/eventController')

// const parkingRoute = require('./routes/parkingRoute')

const app = express();

// Setup express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Registration
app.post('/register', authMiddleware.authValidation, authController.create)
//Login
app.post('/login', authMiddleware.authValidation, authController.login)



app.post('/event', tokenMiddleware.verifyToken, eventController.create)

app.get('/event', tokenMiddleware.verifyToken, eventController.get)






const PORT = 3002
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})