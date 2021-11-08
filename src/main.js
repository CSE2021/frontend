import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
window.Kakao.init("2844ff5ba6815df9b368effb5f45d7b9");
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
