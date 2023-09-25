<template>
    <div>
        <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
          >Add New</router-link
        >
        <table class="table is-striped is-bordered mt-2 is-fullwidth">
          <thead>
            <tr>
              <th>Thread Name</th>
              <th>Content</th>
              <th class="has-text-centered">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.idthread">
              <td>{{ item.thread_name }}</td>
              <td>{{ item.thread_content }}</td>
              <td class="has-text-centered">
                <router-link
                  :to="{ name: 'Edit', params: { id: item.idthread } }"
                  class="button is-info is-small"
                  >Edit</router-link
                >
                <a
                  class="button is-danger is-small"
                  @click="deleteProduct(item.idthread)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
import axios from "axios"

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>