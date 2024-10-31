import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDatePicker from "./Display/SmallCalendar/CustomDatePicker";
import UpcomingEvents from "./Display/UpcomingEvents/UpcomingEvents";
import { useState } from "react";
import MainCalendar from "./Display/BigCalendar/MainCalendar";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="app-container">
      <div className="sidebar">
        <CustomDatePicker date={date} setDate={setDate} />
        <hr />
        <UpcomingEvents date={date} />
      </div>
      <div className="content">
        <MainCalendar/>
      </div>
    </div>
  );
}

export default App;
