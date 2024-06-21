import Main from '@/pages/Main';
import { createRouter,createWebHistory } from "vue-router";
import About from '@/pages/About';
import Teachers from '@/pages/Teachers';
import Courses from '@/pages/Courses';
import OnlineTest from '@/pages/OnlineTest';
import Policy from '@/pages/Policy';
import Result from '@/pages/Result';
const routes = [
    {
        path:'/',
        component:Main
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/teachers',
        component:Teachers
    },
    {
        path:'/courses',
        component:Courses
    },
    {
        path:'/onlinetest',
        component:OnlineTest
    },
    {
        path:'/policy',
        component:Policy
    },
    {
        path:'/result',
        component:Result
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

//process.env.BASE_URL