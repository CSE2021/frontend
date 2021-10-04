import { createWebHistory, createRouter } from "vue-router";
import Posting from "./components/Posting.vue";
import PageDetail from "./components/PageDetail.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const routes = [
  {
    path: "/Post",
    component: Posting,
  },
  {
    path: "/PageDetail",
    component: { PageDetail },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
