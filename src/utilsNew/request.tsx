import axios from 'axios';
import Api from './Api';

const postType = async (url: string, data: any) => {
  return Api.post(url, data, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  });
};
const putType = async (url: string, data: any) => {
  return Api.put(url, data, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  });
};
const patchType = async (url: string, data: any) => {
  return Api.patch(url, data, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  });
};
const getType = async (url: string) => {
  return Api.get(url, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  });
};
const deleteType = async (url: string) => {
  return Api.delete(url, {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
  });
};
const uploadImg = async (signedUrl: any, data: any, contentType: any) => {
  return axios.put(`${signedUrl}`, data, {
    headers: {
      'Content-Type': contentType
    }
  });
};
export { postType, putType, getType, deleteType, patchType, uploadImg };
