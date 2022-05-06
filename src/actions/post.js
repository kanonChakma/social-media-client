import * as api from '../api';

export const getPost = () => async(dispatch) => {
    try {
        const {data} = await api.getPosts();
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (newPost) => async(dispatch) => {
    try{
       const {data} = await api.createPost(newPost);
       dispatch({type:'CREATE', payload: data});
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id, updatePost) => async(dispatch) =>{
 try {
     const {data} = await api.updatePost(id, updatePost);
     dispatch({type:'UPDATE', payload: data});
 }catch(error){
     console.log(error);
  }
}