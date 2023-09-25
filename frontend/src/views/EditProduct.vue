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
        <button class="button is-success" @click="updateProduct">UPDATE</button>
      </div>
    </div>
  </template>
   
  <script>
  // import axios
  import axios from "axios";
   
  export default {
    name: "EditProduct",
    data() {
      return {
        threadName: "",
        threadContent: "",
      };
    },
    created: function () {
      this.getProductById();
    },
    methods: {
      // Get Product By Id
      async getProductById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/products/${this.$route.params.id}`
          );
          this.threadName = response.data.thread_name;
          this.threadContent = response.data.thread_content;
        } catch (err) {
          console.log(err);
        }
      },
   
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `http://localhost:5000/products/${this.$route.params.id}`,
            {
              thread_name: this.threadName,
              thread_content: this.threadContent,
            }
          );
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