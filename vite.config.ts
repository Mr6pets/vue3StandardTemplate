import {ConfigEnv, defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import alias from './vite/alias';
import {parseEnv} from "./vite/utils";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// })

//这里配置下 vite 管理
export default ({command,mode}:ConfigEnv)=>{
  /**
   * 这段代码使用 JavaScript 语言编写。
   * “const isBuild=command==='build';”定义了一个常量“isBuild”，判断变量“command”是否等于字符串“build”，如果相等则“isBuild”为真，否则为假。
   * “const root=process.cwd();”定义了一个常量“root”，通过调用“process.cwd()”方法获取当前工作目录。
   * “const env=loadEnv(mode,root);”定义了一个常量“env”，调用“loadEnv”函数并传入“mode”和“root”两个参数，这个函数可能用于加载环境变量，具体功能取决于“loadEnv”函数的实现。
   * */
  const isBuild=command==='build';
  const root=process.cwd();
  const env= parseEnv(loadEnv(mode,root));

  // console.log("111",typeof parseEnv(env).VITE_ROUTER_AUTOLOAD)

  console.log('env11',env);
  
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  }
}