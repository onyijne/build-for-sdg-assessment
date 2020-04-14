<template>
  <div id="app">
    <app-form></app-form>
  </div>
</template>

<script>
import AppForm from '@/components/AppForm.vue';

export default {
  components: {
    AppForm
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
