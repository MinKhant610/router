import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetail from '../views/jobs/Jobs-Detail'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path : '/jobs',
    name : 'jobs',
    component : Jobs
  },
  {
    // : => dyanmic route 
    path : '/jobs/jobsDetail/:id',
    name : 'jobsDetail',
    component : JobsDetail,
    props : true,
  },
  //redirect path
  {
    path :'/all-jobs',
    redirect : '/jobs',
  },
  //not found catch or none url in my web
  {
    path: '/:catchAll(.*)',
    component : NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
