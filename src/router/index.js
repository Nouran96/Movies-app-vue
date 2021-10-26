import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/watch-list",
    name: "Watch list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "watchList" */ "../views/WatchList.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundComponent,
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: history,
  routes,
});

export default router;
