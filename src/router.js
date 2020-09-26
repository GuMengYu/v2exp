import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const lazyLoad = name => () => import(/* webpackChunkName: "page" */ `./views/${name}/index.vue`);
const v2Routers = [{
  path: '/v2/',
  component: lazyLoad('v2ex'),
  meta: { keepAlive: true },
  children: [
    {
      path: 'tab/:tab/', 
      name: 'tab', 
      component: lazyLoad('tab'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'topic/:id/',
      name: 'topic',
      component: lazyLoad('topic'),
      props: true,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'node/:id/',
      name: 'node',
      component: lazyLoad('node'),
      props: true,
      meta: {
        keepAlive: true,
      },
    },
  ]
}];
const gankRouters = [{
  path: '/gank/',
  name: 'gank',
  component: lazyLoad('gank'),
  meta: { keepAlive: true },
  children: [
    {
      path: 'ios', 
      name: 'ios', 
      component: lazyLoad('ios'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'android', 
      name: 'android', 
      component: lazyLoad('android'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'frontend', 
      name: 'frontend', 
      component: lazyLoad('frontend'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'backend', 
      name: 'backend', 
      component: lazyLoad('backend'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
    {
      path: 'meizi', 
      name: 'meizi', 
      component: lazyLoad('meizi'), 
      props: true, 
      meta: {
        keepAlive: true,
      },
    },
  ]
}];
export default new Router({
  routes: [
    { path: '/', redirect: { path: '/v2/tab/hot' }},
    ...v2Routers,
    ...gankRouters
  ],
});
