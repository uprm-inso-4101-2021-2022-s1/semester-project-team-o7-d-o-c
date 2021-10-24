import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

/*  Since ReactJS has a calendar component, it was a matter of downloading this 
    and importing it to our React App. On top of that navigating to this page is possible 
    by clinking the "Calendar" link in the site's NavBar.
*/
function Calendar() {
    return (
        <FullCalendar plugins={[dayGridPlugin]}
        initialview='dayGridMonth'/>
    )
}

export default Calendar;

