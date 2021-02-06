import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express(); // initializations of app
dotenv.config();

app.use(bodyParser.json({ limit: "35mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "35mb", extended: true })); //set body parser to send a request
app.use(cors()); //initalizations cors

app.use('/posts', postRoutes); //create middelware to use routes

const PORT = process.env.PORT;

mongoose.connect( process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log('Server running on port:' +PORT ));
}).catch((err) => {
    console.log(err.message);
});

mongoose.set('useFindAndModify', false);