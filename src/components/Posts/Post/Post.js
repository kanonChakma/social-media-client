import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import useStyles from './styles';

const Post = ({post}) => {
  const classes = useStyles();
    return(
      <Card  className={classes.card}>
        <CardMedia
          className={classes.media}
          title={post.title}
          image={post.selectedFile}
        />
      <div className={classes.overlay}>
         <Typography varient="h6">{post.creator}</Typography>
         <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography> 
      </div>
      <div className={classes.overlay2}>
          <Button style={{color: 'white'}} size="small" onClick={()=>{}}>
            <MoreHorizIcon fontSize="default"/>
          </Button>
      </div>
      <div className={classes.details}>
         <Typography  variant="body2" color="textSecondary">
          {
            post.tags.map((tag)=>`# ${tag}`)
          }
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button color="primary" onClick={()=> {}} size="small">
            <ThumbUpAltIcon/>
            like 
            {post.likeCount}
        </Button>
        <Button color="primary" onClick={()=> {}} size="small">
            <DeleteIcon/>
            delete
        </Button>
      </CardActions>
    </Card>
    )
  }
  export default Post;