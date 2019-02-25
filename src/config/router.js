import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '@/components/auth/Auth'
import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticleList from '@/components/article/ArticleList'
import ArticleDetail from '@/components/article/ArticleDetail'

import { userKey, baseUrl } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'auth',
    path: `${baseUrl}auth`,
    component: Auth
},
{
    name: 'home',
    path: baseUrl,
    component: Home
},
{
    name: 'adminPages',
    path: `${baseUrl}admin`,
    component: AdminPages,
    meta: { requiresAdmin: true }
},
{
    name: 'articleList',
    path: `${baseUrl}categories/:id/articles`,
    component: ArticleList
},
{
    name: 'articleDetail',
    path: `${baseUrl}articles/:id`,
    component: ArticleDetail
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)

        if (user && user.admin) {
            next()
        } else {
            next({ path: baseUrl })
        }
    } else {
        next()
    }
})

export default router