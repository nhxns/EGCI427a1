<template>
  <div class="container">
    <form class="ui form">
      <h3 class="ui dividing header">Contact</h3>
      <div class="required field">
        <label>Contact ID</label>
        <input type="text" name="contact-id" placeholder="Contact ID" v-model="User.id" />
      </div>
      <div class="required field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" v-model="User.firstName" />
      </div>
      <div class="required field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" v-model="User.lastName" />
      </div>
      <div class="required field">
        <label>Mobile No.</label>
        <input type="text" name="mobile-num" placeholder="Mobile Number" v-model="User.mobileNum" />
      </div>
      <div class="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" v-model="User.email" />
      </div>
      <div class="field">
        <label>Facebook</label>
        <input type="text" name="facebook" placeholder="Facebook" v-model="User.facebook" />
      </div>
      <div class="field">
        <label>Image Url</label>
        <input type="text" name="img-url" placeholder="Image Url" v-model="User.imgUrl" />
      </div>

      <div class="ui centered buttons">
        <button class="ui primary basic button" type="submit" @click.prevent="editToAPI">
          Save
        </button>
        <button
          class="ui primary basic button"
          type="submit"
          @click.native="$router.push('/contact')"
        >
          Close
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditContact",
  props: {},
  data() {
    return {
      User: {
        id: "",
        firstName: "",
        lastName: "",
        mobileNum: "",
        email: "",
        facebook: "",
        imgUrl: "",
      },
    };
  },
  methods: {
    editToAPI() {
      console.log(this.$route.params.contactID);
      let newUser = {
        id: this.User.id,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        mobileNum: this.User.mobileNum,
        email: this.User.email,
        facebook: this.User.facebook,
        imgUrl: this.User.imgUrl,
      };
      console.log(newUser);
      axios
        .post("https://egci427a1.herokuapp.com/users/" + this.$route.params.contactID, newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get("https://egci427a1.herokuapp.com/users/" + this.$route.params.contactID)
      .then((response) => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
