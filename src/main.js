import { createApp } from 'vue'
import App from './App.vue'
import "nprogress/nprogress.css";

import { createRouter, createWebHistory } from "vue-router";
import ProductPane from "./components/ProductPane.vue";
import CartPane from "./components/CartPane.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import Thankyou from "./components/Thankyou.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/product" },
        { path: "/product", component: ProductPane, meta: { requireAuthen: true } },
        { path: "/cart", component: CartPane, meta: { requireAuthen: true } },
        { path: "/register", component: Register },
        { path: "/login", component: Login },
        { path: "/logout", component: Logout,  meta: { requireAuthen: true } },
        { path: "/thankyou", component: Thankyou,  meta: { requireAuthen: true } },
    ]
});

router.beforeEach(function (to, from, next) {
    if (to.meta.requireAuthen) {
        if (app.config.globalProperties.$authenticated) {
            next();
        }
        else {
          // not authenticated yet
          alert("Please login first");
          next("/login");  
        }
    }
    else {
        // the user is heading to the public page
        next();
    }
})

const app = createApp(App);
app.use(router);
app.mount('#app');

//  Create global properties
app.config.globalProperties.$displayName = "";
app.config.globalProperties.$idToken = "";
app.config.globalProperties.$expiresIn = "";
app.config.globalProperties.$authenticated = "";


export { app };