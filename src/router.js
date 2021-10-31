import { createWebHistory, createRouter } from "vue-router";
import Posting from "./components/Posting.vue";
import Pagedetail from "./components/PageDetail.vue";
import Register from "./components/Register.vue";
import ItemList from "./components/ItemList.vue";
import Complete from "./components/Check.vue";
import mypage from "./components/Mypage.vue";
import GajangList from "./components/GajangList.vue";
import apply from "./components/apply.vue";
import gj from "./components/gj.vue";

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/Post",
    name: "Posting",
    component: Posting,
  },
  {
    path: "/Pagedetail/:productId",
    name: "Pagedetail",
    component: Pagedetail,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Complete",
    name: "Complete",
    component: Complete,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: mypage,
  },
  {
    path: "/GajangList",
    name: "GajangList",
    component: GajangList,
    children: [
      {
        path: "/GajangList/gj",
        name: "gj",
        component: gj,
      },
      {
        path: "/GajangList/apply",
        name: "apply",
        component: apply,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
