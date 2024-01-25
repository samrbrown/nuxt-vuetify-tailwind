<template>
  <div class="bg-neutral-200 h-full w-full p-5">
    <div class="h-full grid gap-x-4 gap-y-5 grid-cols-3 grid-rows-3">
      <div class="shadow-lg bg-white rounded-xl px-5 py-3">
        <div class="flex items-center">
          <h3 class="grow text-xl font-bold">CTR</h3>
          <v-menu :location="'start center'" :offset="5">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" variant="text" density="comfortable" v-bind="props" />
            </template>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-swap-horizontal" value="swapCard">Swap Card</v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="shadow-lg bg-white rounded-xl px-5 py-3">
        <div class="flex items-center">
          <h3 class="grow text-xl font-bold">CPC</h3>
          <v-menu :location="'start center'" :offset="5">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" variant="text" density="comfortable" v-bind="props" />
            </template>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-swap-horizontal" title="Swap Card" value="swapCard"></v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="shadow-lg bg-white rounded-xl px-5 py-3">
        <div class="flex items-center">
          <h3 class="grow text-xl font-bold">CPL</h3>
          <v-menu :location="'start center'" :offset="5">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" variant="text" density="comfortable" v-bind="props" />
            </template>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-swap-horizontal" title="Swap Card" value="swapCard"></v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="shadow-lg bg-white h-full col-span-2 row-span-2 rounded-xl px-5 py-3">
        <div class="flex items-center">
          <h3 class="grow text-xl font-bold">Analysis</h3>
          <v-menu :location="'start center'" :offset="5">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" variant="text" density="comfortable" v-bind="props" />
            </template>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-swap-horizontal" title="Swap Card" value="swapCard"></v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div class="shadow-lg bg-white row-span-2 rounded-xl px-5 py-3">
        <div class="flex items-center">
          <h3 class="grow text-xl font-bold">Spend</h3>
          <v-menu :location="'start center'" :offset="5">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-cog" variant="text" density="comfortable" v-bind="props" />
            </template>
            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-swap-horizontal" title="Swap Card" value="swapCard"></v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const overlay = ref(null)
</script>