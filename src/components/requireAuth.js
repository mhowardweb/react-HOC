// HOC exports a function
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

  // our component just got rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // our component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  //helper method
  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  } 
// ...this.props takes all props from parent and passes them through to the child
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};