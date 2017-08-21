import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT COMPONENTS
import Home from './Components/Home';
import PostList from './Components/Posts/PostList';
import Calendar from './Components/Calendar/Calendar.jsx';
import BaseLayout from './Components/Base/BaseLayout';
import Albums from './Components/Album/Albums';
import LoginSignUp from './Components/LoginSignUp.jsx';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/albums" component={Albums}/>
        <Route path="/login" component={LoginSignUp}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/postlist" component={PostList}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
   document.getElementById('root'));

registerServiceWorker();
