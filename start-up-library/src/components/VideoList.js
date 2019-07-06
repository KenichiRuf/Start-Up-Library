import React from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import { addVideo } from '../actions';

const VideoList = (props) => {
  return(
    <form>
      <input type='text' placeholder='Video URL' />
      <input type='text' placeholder='Why Should Someone Watch This Video?' />
      <button>Submit</button>
    </form>
    {props.videos.map(video => <Video video={video} key={video.id}/>)}
  )
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { addVideo })(VideoList);
