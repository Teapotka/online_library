<template>
    <v-row v-if="isLoading" class="ma-10" style="width: 100%;">
            <v-col class="text-center">
                <v-progress-circular indeterminate></v-progress-circular>
                Loading...
            </v-col>
        </v-row>
</template>
<script>
export default{
    props: {
        isLoading: {
            type: Boolean,
            required: true,
        },
    }
}
</script>