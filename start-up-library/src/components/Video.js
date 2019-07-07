import React from 'react';

const Video = (props) => {
  return(
    <div>
      <iframe width="600" height="400" src={props.video.url.replace('watch?v=', 'embed/')} title={props.video.url}></iframe>
      <p>{props.video.why}</p>
    </div>
  )
}

export default Video;
