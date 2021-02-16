import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Register",
    component: () => import("../views/Register.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
