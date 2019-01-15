<template>
   <div> 
    <label for="filter"> Search by: </label>
    <select id="filter-select" v-model="filter">
    <option value="main">Name and Description</option>
    <option value="name">Name </option>
    <option value="desc">Description </option>
    <option value="id"> ID </option>
    <option value="amount">Amount</option> 
    </select>
   </div>
</template>

<script>
  export default {
    computed: {
      filter: {
        get() {
          return this.$store.state.filter
        },
        set(value) {
          this.$store.commit('updateFilter', value)
        }
      }
    }
  }
</script>