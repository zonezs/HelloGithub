// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios"; /** 引入全局 axios */

const app = createApp(App);
app.config.globalProperties.$axios = axios; /** 挂载全局 axios */
app.mount("#app");

// createApp(App).mount('#app')
