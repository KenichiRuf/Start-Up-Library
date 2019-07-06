import React from 'react';

const Video = (props) => {
  return(
    <iframe width="600" height="400" src={props.url}></iframe>
  )
}

export default Video;
