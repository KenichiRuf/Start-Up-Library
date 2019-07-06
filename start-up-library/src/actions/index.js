import axios from 'axios';

export const ADD_VIDEO_START = "ADD_VIDEO_START";
export const ADD_VIDEO_SUCCESS = "ADD_VIDEO_SUCCESS";
export const ADD_VIDEO_FAILURE = "ADD_VIDEO_FAILURE";

export const addVideo = () => dispatch => {
  dispatch({type: ADD_VIDEO_START});
  axios.get('http://localhost:5000/api/videos')
  .then(response => dispatch({type: ADD_VIDEO_SUCCESS, payload: response.data}))
  .catch(error => dispatch({type: ADD_VIDEO_FAILURE, payload: error}))
}
