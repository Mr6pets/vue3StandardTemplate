import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router,{setupRouter} from '@/router'
import {setupPlugins} from "@/plugins";

// const app = createApp(App)
// setupRouter(app)
// // app.use(router)
// app.mount('#app')

//异步 当路由都完成后再挂在app
async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  setupPlugins(app);

  app.use(router);
  await router.isReady();
  app.mount('#app');
}
bootstrap()

