import http from "./httpService";
const localHost = 'http://192.168.42.34';






export const reverse = async (data) => http.post(`${localHost}/reverse`, data);
// export const reverse = async () => http.get(`${localHost}/reverse`);
export const geocode = async (data) => http.post(`${localHost}/geocode`, data);
// export const geocode = async () => http.get(`${localHost}/geocode`);

