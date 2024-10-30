import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MainCalendar.css";

const localizer = momentLocalizer(moment);

const MainCalendar = ({ events }) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={["month", "week", "day"]}
      defaultView="month"
      selectable
    />
  );
};

export default MainCalendar;
