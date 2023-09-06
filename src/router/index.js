import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import New from "../components/News.vue";
import Contact from "../components/Contacts.vue";
import Post from "../components/Posts.vue";
import postDetail from "../components/PostsParams.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/new",
    component: New,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/post",
    component: Post,
  },
  {
    path: "/post/:id",
    component: postDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
