import { createApp } from 'vue';
import App from './App.vue';
import router from './config/routes';
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');