<template>
    <TheLoader :isLoading="isLoading"/>
    <BookDetails :book="books[0]" v-if="!isLoading && books.length"/>
</template>
<script>
import { useBookStore } from '../stores/bookStore';
import BookDetails from '../components/BookDetails.vue';
import TheLoader from '../components/TheLoader.vue'
export default{
    data(){
        return{
            bookStore: useBookStore(),
        }
    },
    computed:{
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
    components:{
        BookDetails,
        TheLoader
    },
    created(){
        const bookId = this.$route.params.id
        this.bookStore.searchById(bookId);
    }
}
</script>