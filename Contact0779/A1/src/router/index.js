import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import AddContact from "../views/AddContact.vue";
import EditContact from "../views/EditContact.vue";
// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/addcontact",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/",
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
