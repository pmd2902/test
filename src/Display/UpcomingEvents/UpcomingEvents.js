/* eslint-disable jsx-a11y/anchor-is-valid */
import "./UpcomingEvents.css";
const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <div className="header">
        <h3>Upcoming Events</h3>
        <button className="view-all-button">
          <span>View All</span>
        </button>
      </div>
      <div className="sub-title">
        <span>Today, 4 April</span>
      </div>
      <div className="event">
        <div className="event-header">
          <p className="event-title">First Session with Alex Stan</p>
          <button className="event-button"><icon /></button>
        </div>
        <p className="event-time">9:00 AM - 9:30 AM GMT+8</p>
        <a href="#" className="event-link">
          View Client Profile
        </a>
      </div>
      {/* <div className="event">
        <p className="event-title">
          Webinar: How to cope with trauma in professional life
        </p>
        <p className="event-time">9:00 AM - 10:00 AM GMT+8</p>
        <a href="#" className="event-link">
          View Client Profile
        </a>
      </div> */}
    </div>
  );
};
export default UpcomingEvents;
