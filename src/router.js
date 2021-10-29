import { createWebHistory, createRouter } from "vue-router";
import Posting from "./components/Posting.vue";
import Pagedetail from "./components/PageDetail.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import ItemList from "./components/ItemList.vue";

const routes = [
  {
    path: "/",
    name: ItemList,
    component: ItemList,
  },
  {
    path: "/Post",
    name: Posting,
    component: Posting,
  },
  {
    path: "/Pagedetail",
    name: Pagedetail,
    component: Pagedetail,
  },
  {
    path: "/Login",
    name: Login,
    component: Login,
  },
  {
    path: "/Register",
    name: Register,
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
