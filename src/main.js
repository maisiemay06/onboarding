import { createApp } from "vue";
import App from "./App.vue";
import "../public/output.css";
import { store } from "./App.vue";

const app = createApp(App);

app.use(store);

app.mount("#app");
