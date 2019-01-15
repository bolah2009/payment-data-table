<template>
    <div>
      <app-search/>
      <app-filter/>    
      <sort/>
      <app-table/>
    </div>
</template>

<script>
// Imports
import search from '../components/search.vue';
import filter from '../components/filter.vue';
import sort   from '../components/sort.vue';
import table  from '../components/table.vue';


export default {
    components: {
        'app-search': search,
        'app-filter': filter,
        'sort'      : sort,
        'app-table' : table,
    }
}
</script>

<style>
body{
    margin: 4px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
}
</style>