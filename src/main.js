import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import CanvasJSChart from '@canvasjs/vue-charts';

createApp(App)
  .use(router)
  .use(CanvasJSChart)
  .mount('#app');