import * as api from './index';
import ApiUrls from './urls';

export const addToFavourite = async body => {
  return await api.postRequest(ApiUrls.favourites, body);
};

export const loadFavouritesList = async () => {
  return await api.getRequest(ApiUrls.favourites);
};

export const deleteFavourite = async favouritesId => {
  return await api.deleteRequest(ApiUrls.deleteFavourites(favouritesId));
};
