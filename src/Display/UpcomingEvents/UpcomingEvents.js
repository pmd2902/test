/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import "./UpcomingEvents.css";
import VideoCallIcon from "../../Assets/video.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import ViewClientProfileModal from "./Modal/ViewClientProfileModal";

const UpcomingEvents = ({ date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = ["#f1f1f1", "#fdcb6e", "#74b9ff"];
  const events = useSelector((state) =>
    state.event.event.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }))
  );
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="upcoming-events">
      <div className="header">
        <h3>Upcoming Events</h3>
        <button className="view-all-button">
          <span>View All</span>
        </button>
      </div>
      <div className="sub-title">
        <span>Today, {dayjs(date).format("D MMM")}</span>
      </div>
      {events
        .filter((event) => {
          const eventStart = dayjs(event.start);
          const eventEnd = dayjs(event.end);
          const targetDate = dayjs(date).startOf("day");
          return (
            targetDate.isSame(eventStart, "day") ||
            targetDate.isSame(eventEnd, "day") ||
            (targetDate.isAfter(eventStart, "day") &&
              targetDate.isBefore(eventEnd, "day"))
          );
        })
        .map((event) => {
          const backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          return (
            <div className="event" key={event.id} style={{ backgroundColor }}>
              <div className="event-header">
                <p className="event-title">{event.title}</p>
                {event?.type === "appointment" && (
                  <button className="event-button">
                    <img src={VideoCallIcon} alt="video-call" />
                  </button>
                )}
              </div>
              <p className="event-time">
                {dayjs(event.start).format("h:mm A DD/MM/YYYY")} -{" "}
                {dayjs(event.end).format("h:mm A DD/MM/YYYY")}
              </p>
              {event?.account && event.type !== "event" && (
                <div className="event-account">
                  <img
                    src={event.account.avatar}
                    alt="avatar"
                    className="event-avatar"
                  />
                  <a href="#" className="event-link" onClick={toggleModal}>
                    View Client Profile
                  </a>
                </div>
              )}
              {isOpen && (
                <ViewClientProfileModal
                  modal={isOpen}
                  closeModal={toggleModal}
                  profile={event?.account}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
export default UpcomingEvents;
