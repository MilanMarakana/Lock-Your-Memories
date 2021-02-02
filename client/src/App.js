import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './Memories_Store/actions/posts';
import useStyles from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './assets/images/memories.png';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Work Sans',
            'sans-serif'
        ].join(','),
    },
});

const App = () => {
    const [currentId, setCurrentId] = useState(null); 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Your Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts  setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
                </Grid>
            </Grow>
        </Container>
        </ThemeProvider>
    );
}

export default App;

