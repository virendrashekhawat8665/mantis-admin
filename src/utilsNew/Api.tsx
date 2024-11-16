import axios from 'axios';

let url = '';
let stag_Url = '';
url = process.env.REACT_APP_API || '';
stag_Url = process.env.REACT_APP_ASSETS_URL || '';
export const path = () => {
  return stag_Url;
};
export default axios.create({
  baseURL: url
});
export const apiPath = () => {
  return url;
};

