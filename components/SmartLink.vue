<template>
  <a :href="link" target="_blank" class="smartlink">SmartLink</a>
</template>

<script lang="ts">
export default {
  props: ["link"],
};
</script>

<style lang="scss">
.smartlink {
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  background-color: #5d3779;
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
