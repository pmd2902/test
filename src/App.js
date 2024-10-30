import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./Display/SmallCalendar/CustomDatePicker";
import UpcomingEvents from "./Display/UpcomingEvents/UpcomingEvents";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
      <div className="sidebar">
        <CustomDatePicker date={date} setDate={setDate} />
        <hr />
        <UpcomingEvents date={date} />
      </div>
      <div className="content"></div>
    </div>
  );
}

export default App;
