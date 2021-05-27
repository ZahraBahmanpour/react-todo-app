import React, { Component } from 'react';

export default class SearchTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }
  handleChange = (event) => {
    const {searchTask} = this.props;
    this.setState({task: event.target.value});
    searchTask(event.target.value);
  };
  render() {
    return (
        <input
          type="text"
          placeholder="Search task"
          value={this.state.task}
          onChange={this.handleChange}
          autoFocus
        />
    );
  }
}
