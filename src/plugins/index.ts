import {App} from "vue";
import {setupTailwindcss} from "@/plugins/taiwindcss";
/**
 * 设置所有的插件管理
 * */
export  function setupPlugins(app:App) {
    setupTailwindcss();
}