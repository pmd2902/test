import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./Display/SmallCalendar/CustomDatePicker";
import UpcomingEvents from "./Display/UpcomingEvents/UpcomingEvents";
import { useState } from "react";
import MainCalendar from "./Display/BigCalendar/MainCalendar";
import { upcomingEventsData } from "./Data/UpcomingEventsData";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
      <div className="sidebar">
        <CustomDatePicker date={date} setDate={setDate} />
        <hr />
        <UpcomingEvents date={date} />
      </div>
      <div className="content">
        <MainCalendar events={upcomingEventsData} />
      </div>
    </div>
  );
}

export default App;
