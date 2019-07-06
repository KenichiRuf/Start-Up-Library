import {ADD_VIDEO_START, ADD_VIDEO_SUCCESS, ADD_VIDEO_FAILURE} from '../actions';


const initialState = {
  videos: [],
  error: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_VIDEO_START:
      return{
        ...state,
      }
    case ADD_VIDEO_SUCCESS:
      return{
        ...state,
        videos: action.payload,
      }
    case ADD_VIDEO_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    default: return state
  }
}
