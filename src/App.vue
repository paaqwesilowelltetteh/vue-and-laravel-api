<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <nav class="py-4">
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/">Home</RouterLink>
        <RouterLink class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/skills">Skills</RouterLink>
      </nav>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
    <RouterView />
  </div>

</template>
