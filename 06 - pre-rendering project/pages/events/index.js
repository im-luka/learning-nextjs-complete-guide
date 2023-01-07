import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/api-util";

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const findEvents = (year, month) => {
    const path = `/events/${year}/${month}`;

    router.push(path);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventsSearch onSearch={findEvents} />
      <EventList events={events} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
