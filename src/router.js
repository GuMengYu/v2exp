import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/tab/:tab/',
      name: 'tabPage',
      component: () => import(/* webpackChunkName: "tabpage" */ './views/tabPage/index.vue'),
      props: true,
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/topic/:id/',
      name: 'topicPage',
      component: () => import(/* webpackChunkName: "topicPage" */ './views/topicPage/index.vue'),
      props: true,
      meta: {
        keepAlive: false
      },
    },
  ]
})
