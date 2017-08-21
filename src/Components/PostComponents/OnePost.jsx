import React, { Component } from 'react';

class OnePost extends Component {
  render() {
    let posts = (post => {
      return (
        <div className="">
          <div className="">
            <p>User</p>
          </div>
          <div>
            <p>Post Content</p>
          </div>
        </div>
      );
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default OnePost;

// this.props.posts.map
