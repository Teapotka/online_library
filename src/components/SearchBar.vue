<template>
    <v-text-field 
    v-model="searchQuery"
    label="Search the book" 
    variant="solo-filled"
    single-line
    color="surface-light"
    append-inner-icon="mdi-magnify"
    style="width: 100%;"
    max-width="400"
    ></v-text-field>
</template>

<script>
export default{
    data(){
        return {
            searchQuery: ""
        }
    },
    watch:{
        searchQuery(newQuery){
            this.$emit('search', this.searchQuery);
        }
    }
}
</script>