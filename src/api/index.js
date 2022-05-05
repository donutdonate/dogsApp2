import axios from 'axios';
import ApiUrls from './urls';

axios.defaults.headers.common['x-api-key'] =
  'f850d84a-058f-4883-a993-62278d1e664f';
axios.defaults.baseURL = ApiUrls.baseUrl;

export const getRequest = async (url, params = undefined) =>
  await axios.get(url, {params});

export const postRequest = async (url, body) => {
  return await axios.post(url, body);
};

export const deleteRequest = async (url, params = undefined) => {
  return await axios.delete(url, {params});
};
