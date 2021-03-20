import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import firebase from "firebase"

let app

var firebaseConfig = {
    apiKey: "AIzaSyDOBWcXFiDOjFuFY8jtHtOdwYrftZ7BD94",
    authDomain: "egci427-assignment1.firebaseapp.com",
    projectId: "egci427-assignment1",
    storageBucket: "egci427-assignment1.appspot.com",
    messagingSenderId: "995373155417",
    appId: "1:995373155417:web:1d31c83f4a0a56e244dd48",
    measurementId: "G-TPPG9SNM7W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})
