import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
  
      const {post} = useSelector((state) => ({...state}))
      const classes = useStyles();
   
   return(
       !post.length? <CircularProgress color="secondary" />:(
         <Grid className={classes.container} container spacing={3} alignItems="stretch">
          {
             post.map((item)=>(
                <Grid item key={item._id} xs={12} sm={6}>
                    <Post setCurrentId={setCurrentId} post={item}/>
                </Grid>
             ))
           }
        </Grid>
       )
    )
  }
  export default Posts;