import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "semantic-ui-css/semantic.css";
import "@/assets/css/global.css";

createApp(App)
  .use(store)
  .mount("#app");
