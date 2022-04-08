import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import CoinDetail from "@/views/CoinDetail";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/About",
    name: "About",
    component: About,
  },

  {
    path: "/coin/:id(.*)",
    name: "coin-detail",
    component: CoinDetail,
  },


  
  { 
      path: "/:catchAll(.*)",
      name: "error",
      component: Error
  },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;