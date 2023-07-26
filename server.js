const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const cors = require('cors');

connectDB()

const app = express()

const cors = require('cors');

const app = express();

// Allow requests from specific origins
const allowedOrigins = ['https://yad2f.onrender.com', 'http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Your other routes and middleware go here...

const port = 5003;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/cars', require('./routes/carRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
