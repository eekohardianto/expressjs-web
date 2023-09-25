<template>
    <div>
      <div class="field">
        <label class="label">Thread Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Thread Name"
            v-model="threadName"
          />
        </div>
      </div>
   
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Thread Content"
            v-model="threadContent"
          />
        </div>
      </div>
   
      <div class="control">
        <button class="button is-success" @click="saveProduct">SAVE</button>
      </div>
    </div>
  </template>
   
  <script>
  // import axios
  import axios from "axios";
   
  export default {
    name: "AddProduct",
    data() {
      return {
        threadName: "",
        threadContent: "",
      };
    },
    methods: {
      // Create New product
      async saveProduct() {
        try {
          await axios.post("http://localhost:5000/products", {
            thread_name: this.threadName,
            thread_content: this.threadContent,
          });
          this.threadName = "";
          this.threadContent = "";
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>

<style>
</style>