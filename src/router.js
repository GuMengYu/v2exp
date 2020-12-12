import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const lazyLoad = name => () => import(/* webpackChunkName: "page" */ `./views/${name}/index.vue`);
const v2Routers = [
  {
    path: 'v2/',
    component: lazyLoad('v2ex'),
    meta: { keepAlive: true },
    children: ['tab', 'topic', 'node'].map(name => ({
      path: `${name}/:id/`,
      name,
      component: lazyLoad(name),
      props: true,
      meta: {
        keepAlive: true,
      },
    })),
  },
];
const gankRouters = [{
  path: 'gank/',
  name: 'gank',
  component: lazyLoad('gank'),
  meta: { keepAlive: true },
  children: ['ios', 'android', 'frontend', 'backend', 'meizi'].map(name => ({
    path: name,
    name,
    component: lazyLoad(name),
    meta: {
      keepAlive: true,
    },
  })),
}, {
  path: 'post/:id/',
  name: 'post',
  component: lazyLoad('gank/post'),
  props: true,
  meta: { keepAlive: true },
}];
const musicRoutes = [{
  path: 'now/',
  name: 'now',
  component: lazyLoad('netease/listen-now'),
  meta: {keepAlive: true},
}];
export default new Router({
  routes: [
    {
      path: '/',
      component: lazyLoad('layout'),
      children: [...v2Routers, ...gankRouters],
      redirect: { path: '/v2/tab/hot' },
    },
    {
      path: '/about',
      component: () => import('./views/About'),
    },
    {
      path: '/inetease',
      component: lazyLoad('netease'),
      children: musicRoutes,
      redirect: { path: '/inetease/now' },
    },
  ],
});
