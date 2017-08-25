import React, { Component } from 'react';
import OnePost from './OnePost'

class PostList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="">
        <div className="">
          <h2>Recent Posts:</h2>
        </div>
        <button type="submit">
          Refresh
        </button>
        <div>
          <OnePost />
        </div>
      </div>
    );
  }
}

export default PostList;
