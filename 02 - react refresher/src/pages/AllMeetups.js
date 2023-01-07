import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}meetups.json`)
      .then((response) => response.json())
      .then((data) => {
        const meetupsArray = [];

        for (const key in data) {
          meetupsArray.push({
            id: key,
            ...data[key],
          });
        }

        setIsLoading(false);
        setMeetups(meetupsArray);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetupsPage;
