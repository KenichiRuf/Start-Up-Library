import React from 'react';
import Video from './Video';
import { connect } from 'react-redux';

const VideoList = (props) => {
  return(
    props.videos.map(video => <Video video={video} key={video.url}/>)
  )
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, {})(VideoList);
