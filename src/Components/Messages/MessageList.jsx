import React, { Component } from 'react';
import OneMessage from './OneMessage';
import '../../Styles/PostList.css';

class MessageList extends Component {
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
          <OneMessage />
        </div>
      </div>
    );
  }
}

export default MessageList;

// class MessageList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageList: [],
//     };
//   }
//
//   componentDidMount() {
//     console.log("message fetched");
//     fetch("")
//       .then(results => {
//         return results.json();
//       })
//       .then(data => {
//         this.setState({messageList: data})
//       })
//   }
//
//   render() {
//     return (
//       <div className="">
//         <form>
//           <label>
//             Title:
//             <input className="titleTextBox"type="text" name="name"/>
//           </label>
//           <br/>
//           <label>
//             Message:
//             <input className="messageTextBox" type="text" />
//           </label>
//           <br/>
//           <input type="Submit" value="Submit"/>
//         </form>
//         <div className="">
//           <h2>Recent Posts:</h2>
//         </div>
//         <button type="submit">
//           Refresh
//         </button>
//         <div>
//           <OneMessage
//             messageList={this.state.messageList}
//             />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default MessageList;
