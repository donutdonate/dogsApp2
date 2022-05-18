const ApiUrls = {
  baseUrl: 'https://api.thedogapi.com/v1/',
  breeds: '/breeds',
  favourites: '/favourites',
  deleteFavourites: (favouritesId: string) => `/favourites/${favouritesId}`,
  image: (breed_id: number) =>
    `/images/search?breed_id=${breed_id}&include_breeds=false`,
};

export default ApiUrls;
