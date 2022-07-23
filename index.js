const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authorRoute = require('./routes/author')
const courseRoute = require('./routes/course')

dotenv.config()

mongoose.connect(process.env.MONGODB_URL,{}, () => { 
    console.log('Connected to MongoDB')
})

app.use(bodyParser.json({limit: "500mb"}));
app.use(cors());
app.use(morgan('common'));

//Routes
app.use('/author', authorRoute);
app.use('/course', courseRoute);

app.listen(3000, () => {
    console.log('Server is running...')
})