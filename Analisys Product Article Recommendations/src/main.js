import { createApp } from 'vue'
import { createStore } from 'vuex'

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/all.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router, store).mount("#app");
