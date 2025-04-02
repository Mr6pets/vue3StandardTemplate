import {App} from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
import layoutRoutes from "./autoload";

const router = createRouter({
  history: createWebHistory(),
    routes: [...routes,...layoutRoutes]
})

// 函数导出
export function setupRouter(app:App) {
    app.use(router)
}

// 具名导出
export default router




