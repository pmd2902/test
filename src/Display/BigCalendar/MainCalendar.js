import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MainCalendar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEventsModal from "./Modal/AddEventModal";
import { addEvent } from "../../Store/eventSlice";
import { generateUID } from "../../Utils/utils";

const localizer = momentLocalizer(moment);

const MainCalendar = () => {
  const [formData, setFormData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const events = useSelector((state) =>
    state.event.event.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }))
  );

  const dayPropGetter = (date) => {
    const eventType = events.find((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return date >= eventStart && date < eventEnd;
    });

    let backgroundColor = "#ffffff";

    if (eventType) {
      if (eventType.type === "event") {
        backgroundColor = "#a8d5a2";
      } else if (eventType.type === "appointment") {
        backgroundColor = "#a2c5d5";
      }
    }
    return {
      style: {
        backgroundColor: backgroundColor,
      },
    };
  };

  const handleSelect = (slotInfo) => {
    const newEvent = {
      start: new Date(slotInfo.start),
      end: new Date(slotInfo.end),
    };
    setFormData(newEvent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({});
  };

  const handleAddEvent = () => {
    dispatch(addEvent({ ...formData, id: generateUID() }));
    closeModal();
  };

  return (
    <div>
      <Calendar
        key={events.length}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        defaultView="month"
        selectable
        step={15}
        timeslots={4}
        onSelectSlot={(slotInfo) => {
          handleSelect(slotInfo);
        }}
        dayPropGetter={dayPropGetter}
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
