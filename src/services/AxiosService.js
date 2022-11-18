import axios from "axios";
import Nprogress from "nprogress";
import { app } from "../main";

const apiClient = axios.create({
    baseURL:
    "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem.json"
});

apiClient.interceptors.request.use(
    config => {
        Nprogress.start();
        return config;
    }
);

apiClient.interceptors.request.use(
    response => {
        Nprogress.done();
        return response;
    }
);

export default {
    post(theObj) {
    //   return apiClient.post("", theObj);
        
        // this is the url when user login already. 
        let url =
            "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem.json?auth=" + app.config.globalProperties.$idToken;
            app.config.globalProperties.$idToken;
        // if the user signed in, the url shouldn't have this part: "?auth=" 
        if (!app.config.globalProperties.$authenticated) {
            url = 
                "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem.json"
        }   
        return apiClient.post(url, theObj);
    },
    get() {
    //   return apiClient.get();
    
        let url =
            "https://iccs340-project-default-rtdb.asia-southeast1.firebasedatabase.app/cartitem.json?auth=" + app.config.globalProperties.$idToken;
            app.config.globalProperties.$idToken;
        return apiClient.get(url);
    },
  };