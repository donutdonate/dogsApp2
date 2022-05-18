import * as api from './index';
import ApiUrls from './urls';

export const getAllBreeds = async () => await api.getRequest(ApiUrls.breeds);

export const getRandImage = async (breed_id: number) =>
  await api.getRequest(ApiUrls.image(breed_id));
