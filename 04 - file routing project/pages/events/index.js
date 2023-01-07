import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path);
  };

  return (
    <>
      <EventsSearch onSearch={findEvents} />
      <EventList events={events} />
    </>
  );
};

export default AllEventsPage;
