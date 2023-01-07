import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const toggleFavorite = () => {
    if (favoritesCtx.isFavorite(id)) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, title, image, address, description });
    }
  };

  const isFavString = favoritesCtx.isFavorite(id)
    ? "remove from favorites"
    : "add to favorites";

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavorite}>{isFavString}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
