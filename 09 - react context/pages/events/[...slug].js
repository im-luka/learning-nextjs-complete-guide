import Head from "next/head";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  const date = {
    year: +filteredData[0],
    month: +filteredData[1],
  };

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${date.month}/${date.year}`}
      />
    </Head>
  );

  if (!filteredData) {
    return (
      <>
        {pageHeadData}
        <p className="center">Loading...</p>;
      </>
    );
  }

  const events = getFilteredEvents(date);
  if (!events || events.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const datetime = new Date(date.year, date.month - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={datetime} />
      <EventList events={events} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  return {
    props: {},
  };
};

export default FilteredEventsPage;
