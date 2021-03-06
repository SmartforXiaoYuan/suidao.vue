import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/console",
        name: "console",
        component: () => import("./../views/Console"),
        meta: {
            requiresAuth: false,
            title: "控制台"
        },
        children: [
            {
                path: '',
                name: 'console-index',
                component: () => import("./../views/Console/Index"),
                meta: {
                    requiresAuth: true,
                    title: "使用说明"
                }
            },
            {
                path: 'tunnel',
                component: () => import("./../views/Console/Tunnel"),
                meta: {
                    requiresAuth: true,
                    title: "隧道管理"
                }
            },
            {
                path: 'client',
                component: () => import("./../views/Console/Client"),
                meta: {
                    requiresAuth: true,
                    title: "客户端管理"
                }
            },
            {
                path: 'download',
                component: () => import("./../views/Console/Download"),
                meta: {
                    requiresAuth: true,
                    title: "下载客户端"
                }
            }
        ],
    },
    {
        path: '/accessdenied',
        name: 'accessDenied',
        component: () => import("./../views/AccessDenied"),
        meta: {
            requiresAuth: false
        }
    },
    {
        // 会匹配所有路径
        path: '*',
        component: () => import("./../views/_404"),
        meta: {
            requiresAuth: false,
            title: "未找到页面"
        }
    },
    {
        path: "/silent",
        name: "silent",
        component: () => import("./../views/Silent"),
    },

    {
        path: "/profile",
        name: "profile",
        component: () => import("./../views/Profile"),
        meta: {
            requiresAuth: true,
            title: "个人信息"
        }
    }
]

export default new Router({
    // mode: "history",
    routes,
});