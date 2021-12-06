<template>
  <a class="buymeacoffee" :href="link" target="_blank">
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
      alt="Buy Me A Coffee"
    />
  </a>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style lang="scss">
.buymeacoffee {
  vertical-align: middle;
  display: inline-block;
  height: 50px;
  img {
    height: 50px;
    width: auto;
  }
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
}
</style>
