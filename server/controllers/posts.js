import mongoose from 'mongoose';
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

//Update Post using Id
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Sorry! There is no Post with requested Id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new:true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Sorry! There is no Post with requested Id');

    await PostMessage.findByIdAndRemove(_id);
    
    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Sorry! There is no Post with requested Id');

    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}