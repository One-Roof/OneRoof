import React, { Component } from 'react';

class OneMessage extends Component {
  render() {
    let oneMessage = (message => {
      return (
        <div className="">
          <div className="">
            <p>User</p>
          </div>
          <div>
            <p>Message Content</p>
          </div>
        </div>
      );
    })
    return (
      <div>
        {oneMessage}
      </div>
    )
  }
}

export default OneMessage;


//Test//

// class OneMessage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let oneMessage = this.props.messageList.results.map(message => {
//       return (
//         <div className="" key={message.id}>
//           <div className="">
//             <p>User</p>
//           </div>
//           <div>
//             <p>Message Content: {message.content}</p>
//           </div>
//         </div>
//       );
//     })
//     return (
//       <div>
//         {oneMessage}
//       </div>
//     )
//   }
// }
//
// export default OneMessage;
