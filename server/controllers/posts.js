import PostMessage from '../models/postMessage.js';

//getting post from database(postmessage)
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); // find from the database(postmessage)

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body; //getting data from the form(Frontend)

    const newPost = new PostMessage(post); // store into variables

    try {
        await newPost.save(); // save into database(postmessage)

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};