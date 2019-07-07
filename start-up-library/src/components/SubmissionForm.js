import React from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../actions';

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      why: ""
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={(event) => {
        event.preventDefault();
        this.props.addVideo({url: this.state.url, why: this.state.why});
        this.setState({
          url: "",
          why: ""
        })
      }}>
        <input id='url' type='text' placeholder='Video URL' onChange={this.changeHandler} value={this.state.url}/>
        <input id='why' type='text' placeholder='Why Should Someone Watch This Video?' onChange={this.changeHandler} value={this.state.why}/>
        <button>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { addVideo })(SubmissionForm);
