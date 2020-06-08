import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        hidden: true,
        component: () =>
            import ('@/views/Login')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/medicalrecordrequest',
        children: [{
            path: 'medicalrecordrequest',
            name: 'MedicalRecordRequest',
            component: () =>
                import ('@/views/MedicalRecordRequest'),
            meta: {
                title: '病歷資料請求',
                icon: 'sort'
            }
        }]
    },
    {
        path: '/medicalrecord',
        component: Layout,
        children: [{
            path: '/medicalrecord',
            name: 'MedicalRecord',
            component: () =>
                import ('@/views/MedicalRecord'),
            meta: {
                title: '病歷資料查看',
                icon: 's-order'
            }
        }]
    }
]

const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

export default router