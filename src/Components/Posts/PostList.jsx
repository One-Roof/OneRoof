import React, { Component } from 'react';
import OnePost from './OnePost';
import '../../Styles/PostList.css';

class PostList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="">
        <form>
          <label>
            Title:
            <input className="titleTextBox"type="text" name="name"/>
          </label>
          <br/>
          <label>
            Message:
            <input className="messageTextBox" type="text" />
          </label>
          <br/>
          <input type="Submit" value="Submit"/>
        </form>
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
