import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () =>
      import(/* webpackChunkName: "MainPage" */ "../views/MainPage.vue"),
  },
  {
    path: "/:cityName",
    name: "CityDetails",
    component: () =>
      import(/* webpackChunkName: "CityDetails" */ "../views/CityDetails.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
