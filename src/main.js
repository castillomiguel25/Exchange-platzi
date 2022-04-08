import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "@/components/router.js";
import VueChartkick from "vue-chartkick";




createApp(App).use(router).use(VueChartkick).mount("#app");

