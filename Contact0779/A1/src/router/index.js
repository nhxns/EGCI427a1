import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import AddContact from "../views/AddContact.vue";
import EditContact from "../views/EditContact.vue";
import Login from  "../views/Login.vue"
// import HelloWorld from '../views/HelloWorld.vue'


const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/addcontact",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/editcontact/:contactID",
    name: "EditContact",
    component: EditContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
