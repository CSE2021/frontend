import { createWebHistory, createRouter } from "vue-router";
import Posting from "./components/Posting.vue";
import PageDetail from "./components/PageDetail.vue";

const routes = [
  {
    path: "/Post",
    component: Posting,
  },
  {
    path: "/PageDetail",
    component: PageDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
