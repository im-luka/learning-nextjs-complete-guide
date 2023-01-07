import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favMeetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (favMeetup) => {
    setFavorites((prevstate) => [...prevstate, favMeetup]);
  };

  const removeFavoriteHandler = (id) => {
    setFavorites((prevstate) => prevstate.filter((meetup) => meetup.id !== id));
  };

  const itemsIsFavoriteHandler = (id) => {
    return favorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemsIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};
