/**
 * 这里是路由的自动注册
 *  {
*     path: '/',
*     component: () => import('@/layout/admin.vue'),
*     children:[
*       { path:'/admin',component:()=>import('@/views/home.vue')}
*     ]
 *   }
 * */

import {RouteRecordRaw} from "vue-router";

/**
 * 使用 import.meta.globEager 来动态导入路由模块()
 * import.meta.globEager 是 Vite 的一个特性，
 * 但它在 Vite 3 中被替换为 import.meta.glob 的 eager 选项。
 * 如果你的项目使用的是较新版本的 Vite，应改用 import.meta.glob 配合配置参数 { eager: true }。
 */
// const layouts_dis = import.meta.globEager('../layout/**/*.vue');

const layouts = import.meta.glob('../layout/**/*.vue', { eager: true });
const views = import.meta.glob('../views/**/*.vue', { eager: true });

// const layoutRoutes = Object.keys(layouts).map((path) => {
//     console.log("path", path)
//     const layoutComponent = layouts[path].default; // 获取组件
//
//     // 提取路由路径（可以根据你的目录结构调整逻辑）
//     const routePath = path.replace('../layout', '').replace('.vue', '').toLowerCase();
//     return {
//         path: routePath,
//         component: layoutComponent,
//         children: [
//             {
//                 path: '/admin', // 你可以自定义子路由路径
//                 component: () => import('@/views/home.vue') // 示例子路由，导入 home.vue
//             }
//         ]
//     } as RouteRecordRaw;
// });

//获取到layout文件夹下的路由
function  getLayoutRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[];
    Object.entries(layouts).forEach(([path, module]) => {
        const route= getRoutesByModule(path, module);
        route.children=getchildrenRoutes(route);
        layoutRoutes.push(route);
    });
    return layoutRoutes;
}


function getchildrenRoutes(layoutroute:string){
    //这里根据layout布局路由来取值views中的路由相同的名字
    const childrenRoutes = [] as RouteRecordRaw[];
    Object.entries(views).forEach(([file,module])=>{
        if(file.includes(`../views/${layoutroute.name as string }/`)){
            const routes=getRoutesByModule(file,module);
            childrenRoutes.push(routes);
        }
    })
    return childrenRoutes;
}

function getRoutesByModule(path: string, module: {[key:string]:any}){
    // const name=path.split("/").pop().split(".")[0];
    const name=path.replace(/.+layout\/|.+views\/|\.vue/gi,'')
    return  {
        name:name.replace('/','-'),
        path: `/${name}`,
        component: module.default,
    } as RouteRecordRaw;

}



export default getLayoutRoutes();









