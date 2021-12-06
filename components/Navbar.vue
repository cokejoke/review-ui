<template>
  <nav>
    <img
      :src="require(`../assets/img/${imageName}`)"
      :alt="alt"
      @click="toggle()"
    />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    toggle: function (colorName: string): void {
      let current = this.$colorMode.preference;
      this.$colorMode.preference = current == "light" ? "" : "light";
    },
  },
  props: ["imageName", "alt"],
});
</script>

<style lang="scss">
nav {
  padding: 10px 0;
  text-align: center;
  width: 100%;
  background-color: var(--bg-secondary);
  img {
    height: 80px;
    width: auto;
  }
}
</style>
