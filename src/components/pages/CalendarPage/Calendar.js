import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


function Calendar() {
    return (
        <FullCalendar plugins={[dayGridPlugin]}
        initialview='dayGridMonth'/>
    )
}

export default Calendar;

