import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from './actions/post';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memory from './images/memories.png';
import useStyles from './styles';

const App=()=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);
  
  useEffect(()=>{
    dispatch( getPost() );
  },[currentId,dispatch])

  return (
   <Container maxWidth="lg">
       <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
          <img className={classes.image} src={memory} alt="memories" height="60" />
       </AppBar>
       <Grow in>
          <Container>
                <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
                 <Grid item xs={12} sm={7}>
                   <Posts setCurrentId={setCurrentId}/>
                 </Grid>
                 <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                 </Grid>
               </Grid>
          </Container>
       </Grow>
   </Container>
  );
}

export default App;
