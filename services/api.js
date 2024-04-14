import Axios from 'axios';
// export const apiUrl =
//   process.env.NEXT_PUBLIC_EDUCOM_ENV === "production"
//     ? "https://api.educomlab.com"
//     : process.env.NEXT_PUBLIC_EDUCOM_ENV == "development"
//     ? "https://dev.api.educomlab.com"
//     : "http://localhost:9002";

// export const apiUrl = 'https://api.educomlab.com';

// export const apiCall = async (method, route, params) => {
//   let json = null;
//   let loginData = JSON.parse(localStorage.getItem('us_tok'));
//   switch (method) {
//     case 'get':
//       json = await Axios.get(`${apiUrl}${route}`, {
//         params: params,
//         headers: { 'x-educom-token': loginData.token },
//       });
//       return json;
//     case 'post':
//       json = await Axios.post(`${apiUrl}${route}`, params, {
//         headers: { 'x-educom-token': loginData.token },
//       });
//       return json;
//     case 'put':
//       json = await Axios.put(`${apiUrl}${route}`, params, {
//         headers: { 'x-educom-token': loginData.token },
//       });
//       return json;
//     case 'delete':
//       json = await Axios.delete(`${apiUrl}${route}`, params, {
//         headers: { 'x-educom-token': loginData.token },
//       });
//       return json;
//     default:
//       json = await Axios.get(`${apiUrl}${route}`, {
//         headers: { 'x-educom-token': loginData.token },
//       });
//       return json;
//   }
// };
