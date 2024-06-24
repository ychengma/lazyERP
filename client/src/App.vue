<script setup lang="ts">
import {useUserStore } from './store/user'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const userStore = useUserStore()

</script>

<template>
  <RouterView><RouterView />
</template>

<style scoped lang="scss">
</style>
