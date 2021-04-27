import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      component: () => import("@/views/Home"),
    },
    {
      path: "/pageEighImg",
      component: () => import("@/views/pageEighImg"),
    },
    {
      path: "/pageSixImg",
      component: () => import("@/views/pageSixImg"),
    },
    {
      path: "/pageFiveImg",
      component: () => import("@/views/pageFiveImg"),
    },
    {
      path: "/pageFlag",
      component: () => import("@/views/pageFlag"),
    },
  ],
});
