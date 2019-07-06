import React from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../actions';

const SubmissionForm = (props) => {
  return(
    <form onSubmit={() => props.addVideo}>
      <input type='text' placeholder='Video URL' />
      <input type='text' placeholder='Why Should Someone Watch This Video?' />
      <button>Submit</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { addVideo })(SubmissionForm);
