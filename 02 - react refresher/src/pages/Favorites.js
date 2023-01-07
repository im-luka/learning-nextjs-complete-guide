import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavoritesContext } from "../store/favorites-context";

const FavoritesPage = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {!totalFavorites ? (
        <p>You've got no favorites... Try adding some!</p>
      ) : (
        <MeetupList meetups={favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
