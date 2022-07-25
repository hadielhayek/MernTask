const express= require('express')
const app= express()
var path = require('path');
require('dotenv').config()
const cors = require('cors');
const bodyParser=require('body-parser')
const port = process.env.PORT || 3001;
const mongoose = require('mongoose')



const postroute = require('./Routes/post')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log(' connected to the database.'))
    .catch(err => console.error(err))

app.use('/post', postroute)

app.listen(port, () => console.log(`Server running on port ${port}`));