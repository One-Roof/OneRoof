import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT COMPONENTS
import Home from './Components/Home';
import PostList from './Components/PostComponents/PostList'
import Calendar from './Components/CalendarComponents/Calendar.jsx'
import BaseLayout from './Components/BaseComponents/BaseLayout'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route path="/calendar" component={Calendar}/>
      <Route path="/postlist" component={PostList}/>
      <Route path="/" component={Home} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
