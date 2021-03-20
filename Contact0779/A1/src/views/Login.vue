<template>
  <div class="container compact" style="width:400px;">
    <div class="ui teal segment">
        <div class="ui action input">
          <a class="ui teal ribbon label">Login</a>
        </div>
    </div>
    <div class="ui negative message" v-show="incorrect">
        <i class="close icon"></i>
        <div>
            Try again! Incorrect Username and Password.
        </div>
    </div>
    <form class="ui form" style="width:400px;">
                <div class="field">
                    <label>User Account</label>
                    <input type="text" name="user-account" placeholder="User Account" v-model="loginData.username">
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" v-model="loginData.password">
                </div>
                <button class="ui button" type="submit" @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loginData:{
                username: "",
                password: ""
            },
            incorrect: false
        }
    },
    methods: {
        login(){
            if(this.loginData.username == "bob" && this.loginData.password == "1234"){
                this.$router.push('/contact')
            }
            else{
                this.incorrect = true
            }
        }
    },
}
</script>


