import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

import '../styles/Calendar.css'

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const Calendar = props => (
  <div>
    <BigCalendar
      events={events}
      views={allViews}
      defaultDate={new Date(2017, 3, 1)}
    />
  </div>
);

export default Calendar;
