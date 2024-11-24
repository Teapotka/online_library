<template>
    <TheNavigation />
  <v-container class="d-flex flex-column align-center justify-center">
    <RouterView />
  </v-container>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  }
}
</script>
