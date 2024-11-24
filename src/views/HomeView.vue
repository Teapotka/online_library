<template>
        <TheLoader :isLoading="isLoading"/>
        <SearchBar @search="searchBooks"/>
        <div v-if="!books" class="mt-10">No books found</div>
        <div class="d-flex flex-wrap justify-center" v-if="books">
                <BookCard :book="book" v-for="book in books" :key="book.id" />
        </div>
</template>
<script>
import SearchBar from '../components/SearchBar.vue';
import BookCard from '../components/BookCard.vue';
import { useBookStore } from '../stores/bookStore';
import TheLoader from '../components/TheLoader.vue';

export default {
    data() {
        return {
            bookStore: useBookStore(),
        }
    },
    components: {
        BookCard,
        SearchBar,
        TheLoader
    },
    computed: {
        books() {
            return this.bookStore.books;
        },
        isLoading() {
            return this.bookStore.isLoading;
        },
        error() {
            return this.bookStore.error;
        },
    },
    created() {
        this.bookStore.fetchRecentBooks()
    },
    methods:{
        searchBooks(query) {
            if(query.length >= 2){
                this.bookStore.searchBooks(query);
            }
            else if (query.length == 0){
                this.bookStore.fetchRecentBooks()
            }
        }
    }
}
</script>