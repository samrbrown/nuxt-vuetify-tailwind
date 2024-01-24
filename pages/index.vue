<template>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>App Bar</v-app-bar-title>
    </v-app-bar>
    <h1 class="font-bold">Hello world</h1>
    <v-btn :rounded="'xl'" @click="overlay = !overlay">Click Here!</v-btn>
    <v-overlay v-model="overlay"></v-overlay>
    <v-text-field label="Label"></v-text-field>
</template>

<script setup>
import { ref } from 'vue'

const overlay = ref(null)
</script>