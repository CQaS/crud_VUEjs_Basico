import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearView from '../views/CrearView.vue'
import EditarView from '../views/EditarView.vue'
import ListarView from '../views/ListarView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CrearView',
    name: 'CrearView',
    component: CrearView
  },
  {
    path: '/EditarView/:id',
    name: 'EditarView',
    component: EditarView
  },
  {
    path: '/ListarView',
    name: 'ListarView',
    component: ListarView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router