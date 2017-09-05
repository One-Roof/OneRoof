import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT COMPONENTS
import Home from './Components/Home';
import MessageList from './Components/Messages/MessageList';
import Calendar from './Components/Calendar/Calendar.js';
import BaseLayout from './Components/Base/BaseLayout';
import Albums from './Components/Album/Albums';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp.jsx';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/albums" component={Albums}/>
        <Route path="/home" component={Home}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/messagelist" component={MessageList}/>
        <Route path="/" component={LoginSignUp}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
   document.getElementById('root'));

registerServiceWorker();
