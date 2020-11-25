const express = require("express");
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) //----connection mongodb
    .then(() => {
        console.log('mongoDB Connected Successfully');
    }).catch((e) => {
        console.log('No Connection');
    });
app.use(express.json())
const authRout = require('./routes/auth'); // immport routes
app.use('/api', authRout); // route middleware---
app.listen(port, () =>
    console.log(`Server is running at ${port}`),
)