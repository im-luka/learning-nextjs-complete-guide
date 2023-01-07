import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const date = {
    year: +filteredData[0],
    month: +filteredData[1],
  };

  const events = getFilteredEvents(date);
  if (!events || events.length === 0) {
    return (
      <>
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
      <ResultsTitle date={datetime} />
      <EventList events={events} />;
    </>
  );
};

export default FilteredEventsPage;
