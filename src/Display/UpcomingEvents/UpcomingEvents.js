/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import "./UpcomingEvents.css";
import { upcomingEventsData } from "../../Data/UpcomingEventsData";
import VideoCallIcon from "../../Assets/video.png";

const UpcomingEvents = ({ date }) => {
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
      {upcomingEventsData
        .filter(
          (event) =>
            dayjs(event.start).format("YYYY-MM-DD") ===
            dayjs(date).format("YYYY-MM-DD")
        )
        .map((event) => (
          <div className="event">
            <div className="event-header">
              <p className="event-title">{event.title}</p>
              <button className="event-button">
                <img src={VideoCallIcon} alt="video-call" />
              </button>
            </div>
            <p className="event-time">
              {dayjs(event.start).format("h:mm A DD/MM/YYYY")} -{" "}
              {dayjs(event.end).format("h:mm A DD/MM/YYYY")}
            </p>
            {event.resource.account && (
              <div className="event-account">
                <img
                  src={event.resource.account.avatar}
                  className="event-avatar"
                />
                <a href="#" className="event-link">
                  View Client Profile
                </a>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
export default UpcomingEvents;
