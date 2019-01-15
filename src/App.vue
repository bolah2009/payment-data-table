<template>
  <v-app>
   <Navbar/>
   <v-content>
      <router-view></router-view>  
   </v-content>
   <app-footer/>
  </v-app>
</template>

<script>
// Imports
import Navbar from './components/Navbar.vue';
import footer from './components/footer.vue';

export default {
  components: { 
      'Navbar' : Navbar, 
      'app-footer': footer
    }
}
</script>

