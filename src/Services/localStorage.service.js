export const persistEvent = (event) => {
  localStorage.setItem("event", JSON.stringify(event));
};

export const readEvent = () => {
  const events = localStorage.getItem("event");
  return events ? JSON.parse(events) : []; 
};
export const deleteEvent = () => {
  localStorage.removeItem("event");
};
