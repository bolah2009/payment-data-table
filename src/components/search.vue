<template>
       <v-layout align-center justify-center row>
         <v-flex xs10 row>
          <v-text-field append-icon="search" v-model="search" placeholder="Search Data" id ="search"  Outline></v-text-field>
         </v-flex>
       </v-layout>
</template>

<script>
  export default {
    computed: {
      search: {
        // using a two-way computed property with a setter
        get() {
          return this.$store.state.search
        },
        set(value) {
          this.$store.commit('updateSearch', value)
        }
      }
    }
  }
</script>

<style scoped>
  input[type="text"] {
    padding: 8px;
    width: 90%;
    box-sizing: border-box;
  }
</style>