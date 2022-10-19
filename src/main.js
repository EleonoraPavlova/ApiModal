import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "./assets/normalize.css";
import "./assets/base.css";


createApp(App).use(store).mount('#app')
