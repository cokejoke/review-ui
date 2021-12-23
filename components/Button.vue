<template>
  <a :href="link" :style="'background: ' + bg" target="_blank" class="button"
    ><slot
  /></a>
</template>

<script lang="ts">
export default {
  props: ["link", "bg"],
};
</script>

<style lang="scss">
.button {
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  background-color: #5d3779;
  text-align: center;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  transition: opacity 0.2s;
  &:hover {
    transition: opacity 0.2s;
    opacity: 0.8;
  }
}
</style>
