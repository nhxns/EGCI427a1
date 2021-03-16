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
          <button class="ui orange button" @click.native="$router.push('/addcontact')">
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
              v-bind:key="contact.id"
            >
              <img :src="contact.img" class="ui image" />
              <div class="content">
                <div class="center aligned header">{{ contact.firstname }}</div>
                <div class="center aligned meta">
                  {{ contact.mobile }}<br />
                  {{ contact.email }}
                </div>
                <div class="center aligned description"></div>
              </div>
              <div class="center aligned extra content">
                <button class="ui primary icon button">
                  <i class="edit outline icon"></i>
                </button>
                <button class="ui red icon button">
                  <i class="eraser icon"></i>
                </button>
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
      Contacts: [
        {
          id: "01",
          firstname: "Kristy",
          lastname: "Chung",
          middlename: "",
          gender: "F",
          email: "kristy@vuejs.com",
          mobile: "099-000-1234",
          img: "https://semantic-ui.com/images/avatar2/large/kristy.png",
        },
        {
          id: "02",
          firstname: "Matt",
          lastname: "Giampietro",
          middlename: "",
          gender: "M",
          email: "matt.g@vuejs.com",
          mobile: "099-000-4567",
          img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
        },
        {
          id: "03",
          firstname: "Molly",
          lastname: "",
          middlename: "",
          gender: "F",
          email: "molly@vuejs.com",
          mobile: "099-123-4567",
          img: "https://semantic-ui.com/images/avatar2/large/molly.png",
        },
        {
          id: "04",
          firstname: "Elyse",
          lastname: "",
          middlename: "",
          gender: "M",
          email: "elyse@vuejs.com",
          mobile: "099-777-1111",
          img: "https://semantic-ui.com/images/avatar2/large/elyse.png",
        },
      ],
    };
  },
  computed: {
    filterContact: function () {
      return this.Contacts.filter((val) => {
        return val.firstname.match(this.search);
      });
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang=""></style>
