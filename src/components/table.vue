<template>
  <table id="table">
    <popup/> 
    <caption><h2>List of Payment Detials</h2></caption>
  	<thead>
      <tr>         
        <th v-for="header in HeaderData" @click="updateSorted" :id="header">{{header}}
          <span v-show="((header==='ID')&&(sorted==='id-0'))||((header==='Name')&&(sorted==='name-0'))||((header==='Description')&&(sorted==='desc-0'))">
            <i class="fas fa-sort-alpha-down"></i>
          </span>
          <span v-show="((header==='ID')&&(sorted==='id-1'))||((header==='Name')&&(sorted==='name-1'))||((header==='Description')&&(sorted==='desc-1'))">
            <i class="fas fa-sort-alpha-up"></i>
          </span>
          <span v-show="((header==='Amount')&&(sorted==='amount-0'))||((header==='Date')&&(sorted==='date-0'))">
            <i class="fas fa-sort-numeric-down"></i>
          </span>
          <span v-show="((header==='Amount')&&(sorted==='amount-1'))||((header==='Date')&&(sorted==='date-1'))">
            <i class="fas fa-sort-numeric-up"></i>
          </span>
        </th>             
      </tr>
    </thead>
    <tbody>
      <tr v-for="searchdata in searchedData" @click="getData"> 
        <td v-for="header in HeaderData"><span v-if="header==='Amount'">$</span>{{searchdata[header]}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"></td><td colspan="2">Total Amount: <strong v-if="searchedData && searchedData.length>0">${{totalData}}</strong></td>
      </tr>
      <tr>
        <td colspan="2"> Oldest (by date): <strong v-if="searchedData && searchedData.length>0"> {{oldestData.ID}} ({{oldestData.oldest}})</strong></td><td colspan="2">Lowest (by amount): <strong v-if="searchedData && searchedData.length>0">{{lowestData.ID}}  ({{lowestData.lowest}})</strong></td><td rowspan="2"></td>
      </tr>
      <tr>
        <td colspan="2">Newest (by date): <strong v-if="searchedData && searchedData.length>0"> {{newestData.ID}}  ({{newestData.newest}})</strong></td><td colspan="2">Highest (by amount): <strong v-if="searchedData && searchedData.length>0">{{highestData.ID}}  ({{highestData.highest}})</strong></td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
  // Imports
  import popup from './popup.vue';
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      'popup': popup,
    },
    computed: {
      ...mapGetters([
        'searchedData',
        'oldestData',
        'newestData',
        'lowestData',
        'highestData',
        'totalData',
      ]),
      sorted() {
        return this.$store.state.sorted;
      },
      PaymentsData() {
        return this.$store.state.PaymentsData;
      },
      HeaderData() {
        return this.$store.state.HeaderData;
      }
    },
    methods: {
      updateSorted: function(event) {
        let id = event.target.id;
        let value = '';
        console.log(typeof id, id);
        if ((id === "ID") || (id === "id-0")) {
          value = "id-1";
          event.target.id = "id-1";
          this.$store.commit('updateSorted', value)
        } else if (id === "id-1") {
          value = "id-0";
          event.target.id = "id-0";
          this.$store.commit('updateSorted', value)
        } else if ((id === "Name") || (id === "name-0")) {
          value = "name-1";
          event.target.id = "name-1";
          this.$store.commit('updateSorted', value)
        } else if (id === "name-1") {
          value = "name-0";
          event.target.id = "name-0";
          this.$store.commit('updateSorted', value)
        } else if ((id === "Description") || (id === "desc-0")) {
          value = "desc-1";
          event.target.id = "desc-1";
          this.$store.commit('updateSorted', value)
        } else if (id === "desc-1") {
          value = "desc-0";
          event.target.id = "desc-0";
          this.$store.commit('updateSorted', value)
        } else if ((id === "Amount") || (id === "amount-0")) {
          value = "amount-1";
          event.target.id = "amount-1";
          this.$store.commit('updateSorted', value)
        } else if (id === "amount-1") {
          value = "amount-0";
          event.target.id = "amount-0";
          this.$store.commit('updateSorted', value)
        } else if ((id === "Date") || (id === "date-0")) {
          value = "date-1";
          event.target.id = "date-1";
          this.$store.commit('updateSorted', value)
        } else if (id === "date-1") {
          value = "date-0";
          event.target.id = "date-0";
          this.$store.commit('updateSorted', value)
        }
      },
      updateSearch: function(event) {
        this.$store.commit('updateSearch', event.target.value)
      },
      getData: function(event) {
        this.$store.commit('getData', event)
        document.getElementById("myForm").style.display = "block";
      }
    },
    created() {
      this.$store.dispatch('loadPaymentsData');
    }
  }
</script>

<style scoped>
  #table-data * {
    box-sizing: border-box;
    max-width: 95%;
  }

  h2 {
    text-align: center;
    width: 100%;
    color: #1976D2;
  }

  #table {
    border-collapse: collapse;
    max-width: 90%;
    margin: 0px 20px 20px 20px;
  }

  #table tbody tr td,
  #table th,
  #table tfoot tr td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #table tr:hover {
    background-color: #ddd;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
  }

  #table th {
    text-align: center;
    background-color: #1976D2;
    color: white;
  }

  #table tfoot {
    text-align: center;
    color: #1976D2;
  }

  #table thead {
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 10px;
  }
</style>