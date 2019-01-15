<template>
  <div>
    <span v-show="(sorted==='id-0')||(sorted==='name-0')||(sorted==='desc-0')"> <i class="fas fa-sort-alpha-down"></i> </span>
    <span v-show="(sorted==='id-1')||(sorted==='name-1')||(sorted==='desc-1')"> <i class="fas fa-sort-alpha-up"></i> </span>
    <span v-show="(sorted==='amount-0')||(sorted==='date-0')"> <i class="fas fa-sort-numeric-down"></i> </span>
    <span v-show="(sorted==='amount-1')||(sorted==='date-1')"> <i class="fas fa-sort-numeric-up"></i> </span>
    <label for="sort"> Sort by: </label>  
    <select v-model="sorted">
      <option v-for="option in sortOptions" v-bind:value="option.value">  {{ option.text }}  </option>
    </select>
  </div>
</template>

<script>
  export default {
    computed: {
      sorted: {
        get() {
          return this.$store.state.sorted
        },
        set(value) {
          this.$store.commit('updateSorted', value)
        }
      },
      sortOptions() {
        return this.$store.state.sortOptions;
      },
    },
    mounted() {
      this.$store.commit('updateSorted', "id-0");
    }
  }
</script>