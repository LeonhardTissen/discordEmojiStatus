import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { initScreen } from './screen';

createApp(App).mount('#app');

window.onload = initScreen;
