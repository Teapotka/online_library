import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import BookDetailsView from '../views/BookDetailsView.vue';
import OrderView from '../views/OrderView.vue';
import Page404 from '../components/Page404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: HomeView, name: "Home"},
    {path: "/book/:id", component: BookDetailsView, name: "Book"},
    {path: "/orders", component: OrderView, name: "Order"},
    {path: "/:pathMatch(.*)*", component: Page404, name: "404"}
  ],
})

export default router
