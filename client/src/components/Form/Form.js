import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../Memories_Store/actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    };

    const clearDataHandler = () => {};

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={onSubmitHandler}>
                <Typography variant="h6">Create your memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Enter creator name"
                    fullWidth
                    value={postData.creator}
                    onChange={(event) => setPostData({ ...postData, creator: event.target.value })}
                    />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Enter title"
                    fullWidth
                    value={postData.title}
                    onChange={(event) => setPostData({ ...postData, title: event.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Your Message"
                    fullWidth
                    value={postData.message}
                    onChange={(event) => setPostData({ ...postData, message: event.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(event) => setPostData({ ...postData, tags: event.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit a Post</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearDataHandler} type="submit" fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;