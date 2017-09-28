import React, { Component } from 'react';
import OneMessage from './OneMessage';
import '../../Styles/MessageList.css';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      messageContent: '',
      id: '',
      content: '',
      date: '',
    };

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

  }

  componentDidMount() {
    console.log(this.state.messageContent)
    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials:'include',
    })
      .then(results => results.json())
      .then(response => {
        let messageList = response._embedded.messages
        this.setState({
          messageList: messageList
        })
      })
  }

  // componentDidUpdate() {
  //
  //     fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
  //       credentials:'include',
  //     })
  //       .then(results => results.json())
  //       .then(response => {
  //         let messageList = response._embedded.messages
  //         this.setState({
  //           messageList: messageList
  //         })
  //       })
  //   }



  //DELETE*********************
//
//   handleOnDeleteClick(id,content,date) {
//      this.setState({
//         id: message._links.self.href,
//         content: content,
//         date: date,
//       });
//       }
//
//   handleDelete(id) {
//     fetch (id,
//     { method: 'DELETE',})
//     .then(
//         res =>  this.setState({jsonReturnedValue : json})
//     )
//     .catch( err => console.error(err))
// }
  // handleOnclick(id,name,address) {
  //
  //
  //    this.setState({
  //       Employee_Name: name,
  //       Address: address,
  //     });
  //     }
  //
  //   deleteEmployee(id) {
  //       debugger
  //         fetch ('http://localhost:5118/api/employeedetails/deleteemployeedetail/'+ id,
  //         { method: 'DELETE',})
  //         .then(
  //             res =>  this.setState({jsonReturnedValue : json})
  //         )
  //         .catch( err => console.error(err))
  //     }


  //MESSAGE POSTING***************
  handleMessageChange = (event) => {
    this.setState({messageContent: event.target.value})
    console.log(this.state.messageContent)
  }



  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.messageContent)
    // console.log(JSESSIONID)

    let today = new Date()
    let addMessage = {
      "content" : this.state.messageContent,
      "date" : today,
      "userId" : 1
    }
    console.log(JSON.stringify(addMessage))

    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
          method: 'POST',
    	    headers: new Headers({
            'Authorization': 'Basic',
            'Content-Type': 'application/json'
          }),
          credentials:'include',
          body: JSON.stringify(addMessage)
        })


  }

  render() {
    return (
      <div className="messageMainContainer">
        <div>
        <div className="messageFormContainer">

        <form onSubmit={this.handleFormSubmit}>

          <label>

            <input
              className="messageTextBox"
              type="text"
              onChange={this.handleMessageChange}
              value={this.state.messageContent}  placeholder="What's on your mind?"/>

          </label>

          <input className="submitButton" type="Submit" value="Submit"/>

        </form>

        </div>
        <div className="messageListContainer">
        <div className="messageHeader">
          <div>
          <h2>Recent Posts:</h2>
          </div>
          <div className="refreshButtonContainer">
            <button type="submit" className="refreshButton">
              Refresh
            </button>
            </div>
        </div>
        <div>
          <OneMessage

            messageList={this.state.messageList}
            />
        </div>
        </div>
        </div>
        <div className="userBio">
          <div className="profilePicture">
          </div>
          <div>
            User: Matt McDonald
          </div>

        </div>
      </div>
    );
  }
}

// handleDelete = {this.handleDelete.bind(this)}

export default MessageList;
