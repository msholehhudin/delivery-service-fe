import axios from 'axios'
import Cookies from 'js-cookie';

 const api = axios.create({
    baseURL: "http://layanan-antar-obat.test",
    // baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('XSRF-TOKEN');
        if(token){
            console.log("Setting X-XSRF-TOKEN:", decodeURIComponent(token));
            config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token)
        }else {
          console.warn("No XSRF-TOKEN found in cookies");
          console.warn("Token : ", token);
        }

        return config
    },
    (error) => Promise.reject(error)
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error)
    }
  )

  export default api