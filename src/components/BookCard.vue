<template>
    <v-card class="pa-4 d-flex flex-column justify-center ma-5" style="height: 450px; width: 250px;">
        <v-img :src="book.image" height="200"></v-img>
        <v-card-title>{{ book.title }}</v-card-title>
        <v-card-subtitle>{{ book.authors }}</v-card-subtitle>
        <v-card-text>{{ book.subtitle }}</v-card-text>
        <v-row class="pa-4 align-end justify-center ga-4">
            <v-btn @click="redirectToBook(book.id)">Details</v-btn>
            <v-btn @click="addOrder()">Order</v-btn>
        </v-row>
    </v-card>
</template>
<script>
import router from '@/router';
import { useBookStore } from '@/stores/bookStore';

export default {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    methods: {
        redirectToBook(id){
            router.push(`/book/${id}`)
        },
        addOrder() {
            const bookStore = useBookStore();
            bookStore.addOrder({
                id: this.book.id,
                title: this.book.title,
                authors: this.book.authors
            });
        }
    }
}
</script>