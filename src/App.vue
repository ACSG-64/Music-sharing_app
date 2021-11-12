<template>
  <!-- Header -->
  <app-header/>

  <!-- Page -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <app-player/>

  <!-- Auth Modal -->
  <auth/>
</template>

<script>
import AppHeader from './components/Header.vue';
import Auth from './components/Auth.vue';
import AppPlayer from '@/components/Player.vue';

export default {
  name: 'App',
  components: { AppPlayer, Auth, AppHeader },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s linear;
}

.fade-leave-to {
  transition: all 0.3s linear;
  opacity: 0;
}
</style>
