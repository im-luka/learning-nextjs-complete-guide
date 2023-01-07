import EventItem from "./EventItem";
import styles from "./EventList.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;
