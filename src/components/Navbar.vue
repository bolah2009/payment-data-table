<template>
  <nav id="header">
    <v-toolbar flat app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn flat ripple><router-link to="/" exact>Payments Data Home</router-link></v-btn>     
      </v-toolbar-title>
      <v-spacer></v-spacer>  
      <v-toolbar-items>
       <v-btn flat ripple><router-link to="/about" exact class="mr-2">About</router-link></v-btn>
      </v-toolbar-items>          
    </v-toolbar>       
  </nav>
</template>