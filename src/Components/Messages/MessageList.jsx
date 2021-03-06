import React, { Component } from "react";
import OneMessage from "./OneMessage";
import "../../Styles/MessageList.css";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      messageContent: "",
      id: "",
      content: "",
      date: "",
      userName: ""
    };

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.state.messageContent);
  //   console.log("message fetched");
  //   fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
  //     credentials: "include"
  //   })
  //     .then(results => results.json())
  //     .then(response => {
  //       let messageList = response._embedded.messages;
  //       this.setState({
  //         messageList: messageList
  //       });
  //     });
  // }

  componentDidMount() {
    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials: "include"
    })
      .then(results => results.json())
      .then(responseOne => {
        fetch("https://thawing-wave-85503.herokuapp.com/something", {
          credentials: "include"
        })
          .then(results => results.json())
          .then(responseTwo => {
            let userName = responseTwo.username;
            let messageList = responseOne._embedded.messages;
            this.setState({
              messageList: messageList,
              userName: userName
            });
            console.log(this.state.username);
          });
        console.log(this.state.username);
      });
  }

  //INITIAL FETCH TO POST A MESSAGE TO THE DATABASE ON FORM SUBMIT
  handleMessageChange = event => {
    this.setState({ messageContent: event.target.value });
  };

  handleFormSubmit(e) {
    e.preventDefault();

    let today = new Date();
    let addMessage = {
      content: this.state.messageContent,
      date: today,
      userId: 1,
    };

    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      method: "POST",
      headers: new Headers({

        "Content-Type": "application/json"
      }),
      credentials: "include",
      body: JSON.stringify(addMessage)
    }).then(responseTwo => { fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials: "include"
    })
      .then(results => results.json())
      .then(responseThree => {
            let messageList = responseThree._embedded.messages;
            this.setState({
              messageList: messageList,
            })
            console.log(this.state.username);
          })
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
                  value={this.state.messageContent}
                  placeholder="What's on your mind?"
                />
              </label>
              <input className="submitButton" type="Submit" value="Post" />
            </form>
          </div>
          <div className="messageListContainer">
            <div className="messageHeader">
              <div>
                <h2>Recent Posts:</h2>
              </div>
            </div>
            <div className="oneMessageContainer">
              <div>
                <p>I will I will Julia, it's sitting on my counter waiting for a stamp!  -  <span className="oneMessageContent">Bob</span></p>
              </div>
            </div>
            <div className="oneMessageContainer">
              <div>
                <p>Also remember to mail in your RSVPs for my wedding! I'm talking to you Bob...  -  <span className="oneMessageContent">Julia</span></p>
              </div>
            </div>
            <div className="oneMessageContainer">
              <div>
                <p>I think I could make that work, I have to check with work but I might be able to make it for a few days.  -  <span className="oneMessageContent">Julia</span></p>
              </div>
            </div>
            <div className="oneMessageContainer">
              <div>
                <p>That sounds fun to me!  -  <span className="oneMessageContent">Matt</span></p>
              </div>
            </div>
            <div>
              <OneMessage messageList={this.state.messageList} />
            </div>
          </div>
        </div>
        <div className="userBio">
          <div >
            <img className="profilePicture"
              src={require("../../Styles/images/MattPic.jpg")}
            />
          </div>
          <div className="usersMessageName">
            {this.state.userName} Bobson
          </div>
        </div>
      </div>
    );
  }
}

//Attempt at getting the messages to refresh on submit*******

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

//ATTEMPT AT DELETE ON DELETE BUTTON CLICK*********************
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

export default MessageList;
