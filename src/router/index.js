import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/Jobs/Jobs.vue';
import JobDetails from '../views/Jobs/JobDetail.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/about',
    name: 'About',
    component: About
},{
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
},{
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
},
//redirect
{
    path: '/all-jobs',
    redirect: '/jobs'
},
//Catch all 404
{
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;