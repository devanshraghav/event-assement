import React from "react";
import "./EventList.css";
import { useSelector } from "react-redux";
import EmptyPage from "./EmptyPage";

function EventList() {
  const event_list = useSelector((store) => store.event.items);
  if (event_list.length === 0) {
    return <EmptyPage />;
  }
  console.log(event_list);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("event-list", event_list);
  return (
    <div className="main-box">
      <div className="event-box">
        <div>
          <h2>Events</h2>
        </div>
      </div>
      <ul>
        {event_list.map((event, index) => (
          <li key={index}>
            <div className="event-list">
              <div className="left-section">
                <p className="month-name">
                  {monthName[event?.startTime?.getMonth()]}{" "}
                  {event?.startTime?.getDate()}
                </p>
                <p>{weekDay[event.startTime.getDay()]}</p>
              </div>
              <div className="event-data">
                <p className="data">
                  {formatAMPM(event.startTime)} - {formatAMPM(event.endTime)}
                </p>
                <h2 className="data">{event?.title}</h2>
                <p className="data">Location: {event?.eventLocation}</p>
                <p className="data">Capacity: {event?.capacity}</p>
                <p className="data badge">Invited</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <Box /> */}
    </div>
  );
}

export default EventList;
