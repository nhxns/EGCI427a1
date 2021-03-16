<template>
  <div id="">
    <div class="ui inverted menu">
      <div class="header item">
        <img alt="Vue logo" src="./assets/logo.png" />
      </div>
      <router-link to="/" class="item">Contacts</router-link>
      <div class="right menu">
        <router-link to="/" class="item"><i class="user icon large"></i></router-link>
      </div>
    </div>
    <div id="nav">
      <div class="card">
        <div class="card-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
