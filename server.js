const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 10001
const cors = require('cors');

connectDB()

const app = express();

// Allow requests from specific origins
 

// Your other routes and middleware go here...
 
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/cars', require('./routes/carRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
