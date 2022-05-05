import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';
import useStyles from './styles';
const Form = () => {
 
  const [postData, setPostData] = useState({
    creator:'', title:'',message:'',tags:'', selectedFile:''
  })
 
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createPost(postData));
  }
  const clearData = () => {

  }
  console.log(postData);
  return(
   <Paper className={classes.paper}>
     <Typography varient="h6">Creating a Memory</Typography>
     <form autoCapitalize='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField
         name='creator'
         varient='outlined'
         label='Creator'
         fullWidth
         onChange={(e) => setPostData({...postData,creator:e.target.value})}
         value={postData.creator}
        >
        </TextField>
        <TextField
         name='title'
         varient='outlined'
         label='Title'
         fullWidth
         onChange={(e) => setPostData({...postData,title:e.target.value})}
         value={postData.title}
        >
        </TextField>
        <TextField
         name='message'
         varient='outlined'
         label='Message'
         fullWidth
         onChange={(e) => setPostData({...postData, message:e.target.value})}
         value={postData.message}
        >
        </TextField>
        <TextField
         name='tags'
         varient='outlined'
         label='Tags'
         fullWidth
         onChange={(e) => setPostData({...postData,tags:e.target.value})}
         value={postData.tags}
        >
        </TextField>
        <div className={classes.fileInput}>
           <FileBase
            type="file"
            multiple={false}
            onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
           />
        </div>
        <Button className={classes.buttonSubmit} variant='contained' type='submit' size='large' fullWidth color='primary'  >Submit</Button>
        <Button onClick={clearData} variant='contained'  size='small' fullWidth color='secondary'  >Clear</Button>
     </form>
   </Paper>
  )
}
export default Form;