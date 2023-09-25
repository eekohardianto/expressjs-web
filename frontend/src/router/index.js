import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: 'Create',
        path: '/create',
        component: () => import('@/views/AddProduct.vue')
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: () => import('@/views/EditProduct.vue')
    },
    {
        name: 'Index',
        path: '/',
        component: () => import('@/views/ProductList.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router