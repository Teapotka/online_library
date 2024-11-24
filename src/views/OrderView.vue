<template>
  <h1 v-if="!orders.length" class="mt-10">No orders yet</h1>
  <v-table style="width: 100%;" v-if="orders.length">
    <thead>
      <tr>
        <th class="text-left">
          ID
        </th>
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          Author
        </th>
        <th class="text-left">
          Count
        </th>
        <th>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.title }}</td>
        <td>{{ order.authors }}</td>
        <td>{{ order.count }}</td>
        <td>
          <v-icon color="red-darken-2" icon="mdi-delete" size="large" @click="deleteOrder(order.id)">
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { useBookStore } from '../stores/bookStore';

export default {
  data() {
    return {
      bookStore: useBookStore(),
    }
  },
  computed: {
    orders() {
      return this.bookStore.orders
    }
  },
  methods: {
    deleteOrder(id) {
      this.bookStore.deleteOrder(id)
    }
  }
}
</script>