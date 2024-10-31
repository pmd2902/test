import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MainCalendar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEventsModal from "./Modal/AddEventModal";
import { addEvent } from "../../Store/eventSlice";

const localizer = momentLocalizer(moment);

const MainCalendar = () => {
  const [formData, setFormData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.event ?? []);

  const handleSelect = (slotInfo) => {
    const newEvent = {
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setFormData(newEvent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({});
  };

  const handleAddEvent = () => {
    dispatch(addEvent(formData));
    closeModal();
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        defaultView="month"
        selectable
        onSelectSlot={handleSelect}
      />
      {isOpen && (
        <AddEventsModal
          modal={isOpen}
          closeModal={closeModal}
          onSubmit={handleAddEvent}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default MainCalendar;
