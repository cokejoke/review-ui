<template>
  <footer>
    <p>Copyright &copy; {{ year }} {{ name }}</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      year: new Date().getFullYear().toString(),
    };
  },
  props: ["name"],
});
</script>

<style lang="scss">
footer {
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: var(--bg-secondary);
  text-align: center;
  p {
    line-height: 70px;
    color: var(--color-secondary);
    margin: 0;
  }
}
</style>
