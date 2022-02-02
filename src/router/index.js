import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Press from "../components/PressReader.vue";
import Press2 from "../components/Press2.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/press",
    name: "press",
    component: Press,
  },
  {
    path: "/press2",
    name: "press2",
    component: Press2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
