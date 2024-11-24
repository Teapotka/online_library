<template>
    <v-card class="pa-4 d-flex justify-center ma-5" style="width: 100%;">
        <v-row>
            <v-col cols="12" lg="4" class="d-flex justify-center">
                <img :src="book.image" height="500"></img>
            </v-col>
            <v-col cols="12" lg="8">
                <h1 style="width: 100%;">{{ book.title }}</h1>
                <h2>{{ book.authors }}</h2>
                <h3 v-html="book.description"></h3>
                <br>
                <h3>Year: {{ book.year }}</h3>
                <br>
                <h3>Pages: {{ book.pages }}</h3>
                <div class="pa-4">
                    <v-btn @click="addOrder()">Order</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
<style>
h1,
h2,
h3 {
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-all;
}
</style>
<script>
import { useBookStore } from '@/stores/bookStore';


export default {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    methods: {
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