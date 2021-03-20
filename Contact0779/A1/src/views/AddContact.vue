<template>
  <form class="ui form">
    <h3 class="ui dividing header">Contact</h3>
    <div class="required field">
      <label>Contact ID</label>
      <input type="text" name="contact-id" placeholder="Contact ID" />
    </div>
    <div class="required field">
      <label>First Name</label>
      <input type="text" name="first-name" placeholder="First Name" />
    </div>
    <div class="required field">
      <label>Last Name</label>
      <input type="text" name="last-name" placeholder="Last Name" />
    </div>
    <div class="required field">
      <label>Mobile No.</label>
      <input type="text" name="mobile-num" placeholder="Mobile Number" />
    </div>
    <div class="field">
      <label>Email</label>
      <input type="text" name="email" placeholder="Email" />
    </div>
    <div class="field">
      <label>Facebook</label>
      <input type="text" name="facebook" placeholder="Facebook" />
    </div>
    <div class="field">
      <label>Image Url</label>
      <input type="text" name="img-url" placeholder="Image Url" />
    </div>

    <div class="ui centered buttons">
      <button class="ui primary basic button" type="submit">Save</button>
      <button class="ui primary basic button" type="submit" @click.native="$router.push('/contact')">
        Close
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddContact",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
