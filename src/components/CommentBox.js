import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); //stop auto re-load

    this.props.saveComment(this.state.comment);
    this.setState({comment: '' });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      
      <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
      // className added to button to be able to identify it in testing script
    );
  }
}


// we are passing CommentBox to the requireAuth HOC
export default connect(null, actions)(requireAuth(CommentBox));

