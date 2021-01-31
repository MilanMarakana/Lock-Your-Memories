import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express(); // initializations of app

app.use(bodyParser.json({ limit: "35mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "35mb", extended: true })); //set body parser to send a request
app.use(cors()); //initalizations cors

app.use('/posts', postRoutes); //create middelware to use routes

//setup connection with MongoDB Cluster
const CONNECTION_URL = 'mongodb+srv://admin-mils:I@mgunatit369@cluster0.vj867.mongodb.net/LoYourMem?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log('Server running on port:' +PORT ));
}).catch((err) => {
    console.log(err.message);
});

mongoose.set('useFindAndModify', false);