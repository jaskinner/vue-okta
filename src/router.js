import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import auth from "./auth";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function() {
      //   return import(/* webpackChunkName: "about" */ "./views/About.vue");
      // }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: requireAuth
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: function() {
      //   return import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue");
      // }
    },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
});

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
