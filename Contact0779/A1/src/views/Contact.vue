<template>
  <div class="">
    <div class="ui teal segment">
      <form>
        <!-- <div class="form-group row">
          <a class="ui teal ribbon label">Contact</a>
          <div class="col">
            <input type="text" class="form-control" placeholder="Search..." v-model="search" />
          </div>
          <button class="btn btn-secondary" type="button">Search</button>
          <button class="btn btn-warning" type="button">Add</button>
        </div> -->
        <div class="ui fluid action input">
          <a class="ui teal ribbon label">Contact</a>
          <input type="text" placeholder="Search..." v-model="search" />
          <div class="ui button">Search</div>
          <button class="ui orange button" @click="$router.push('/addcontact')">
            <i class="plus icon"></i>
            Add
          </button>
        </div>
      </form>
    </div>

    <div class="card">
      <div class="card-body" style="margin-left: 15px">
        <div class="card-deck">
          <div class="ui centered cards">
            <div
              class="ui card"
              style="min-width: 20rem; max-width: 20rem"
              v-for="contact in filterContact"
              v-bind:key="contact._id"
            >
              <img :src="contact.imgUrl" class="ui image" style="height: 300px" />
              <div class="content">
                <div class="center aligned header">
                  {{ contact.firstName + " " + contact.lastName }}
                </div>
                <div class="center aligned meta" style="font-size: 0.8rem">
                  Mobile : {{ contact.mobileNum }}<br />
                  {{ contact.email ? "Email : " + contact.email : "Email : -" }}<br />
                  {{ contact.facebook ? "Facebook : " + contact.facebook : "Facebook : -" }}
                </div>
                <div class="center aligned description"></div>
              </div>
              <div class="center aligned extra content">
                <router-link :to="{ name: 'EditContact', params: { contactID: contact._id } }">
                  <button class="ui primary icon button">
                    <i class="edit outline icon"></i>
                  </button>
                </router-link>
                <router-link to="/contact">
                  <button class="ui red icon button" @click="delUser(contact._id)">
                    <i class="eraser icon"></i>
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="card">
      <div class="card-body">
        <div class="card-deck">
          <div
            class="card"
            style="min-width: 15rem; max-width: 15rem; margin-top: 10px"
            v-for="contact in contacts"
            v-bind:key="contact.firstname"
          >
            <img class="card-img-top" src="..." />
            <div class="card-body">
              <h5 class="card-title">{{ contact.firstname }}</h5>
              <p class="card-text">
                {{ contact.mobile }}<br />
                {{ contact.email }}
              </p>
            </div>
            <div class="card-footer bg-transparent">
              <button class="btn btn-primary" type="button">Edit</button>&nbsp;
              <button class="btn btn-danger" type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      search: "",
      uid: "",
      Contacts: [],
    };
  },
  computed: {
    filterContact: function () {
      return this.Contacts.filter((val) => {
        return (
          val.firstName.toLowerCase().match(this.search.toLowerCase()) ||
          val.lastName.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
  },
  mounted() {
    axios
      .get("https://egci427a1.herokuapp.com/users")
      .then((response) => {
        console.log(response.data);
        this.Contacts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    DELETE(id) {
      this.uid = id;
    },
    delUser(Contact_id) {
      var url = "https://egci427a1.herokuapp.com/users/" + Contact_id;
      axios
        .delete(url)
        .then(() => {
          console.log("Delete userId: " + Contact_id);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang=""></style>
