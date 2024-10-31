/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import "./UpcomingEvents.css";
import VideoCallIcon from "../../Assets/video.png";
import { useSelector } from "react-redux";

const UpcomingEvents = ({ date }) => {
  const colors = ["#f1f1f1", "#fdcb6e", "#74b9ff"];
  const events = useSelector((state) => state.event.event);
  console.log(events);
  
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
        .filter(
          (event) =>
            dayjs(event.start).format("YYYY-MM-DD") ===
            dayjs(date).format("YYYY-MM-DD")
        )
        .map((event) => {
          const backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          return (
            <div className="event" key={event.id} style={{ backgroundColor }}>
              <div className="event-header">
                <p className="event-title">{event.title}</p>
                {event?.info?.type === "appointment" && (
                  <button className="event-button">
                    <img src={VideoCallIcon} alt="video-call" />
                  </button>
                )}
              </div>
              <p className="event-time">
                {dayjs(event.start).format("h:mm A DD/MM/YYYY")} -{" "}
                {dayjs(event.end).format("h:mm A DD/MM/YYYY")}
              </p>
              {event?.info?.account && event.info.type !== "event" && (
                <div className="event-account">
                  <img
                    src={event.info.account.avatar}
                    alt="avatar"
                    className="event-avatar"
                  />
                  <a href="#" className="event-link">
                    View Client Profile
                  </a>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
export default UpcomingEvents;
