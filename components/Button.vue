<template>
  <a
    @click="emitClick"
    :href="link"
    :style="'background: ' + bg"
    target="_blank"
    class="button"
    ><slot
  /></a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: false,
    },
    bg: {
      type: String,
    },
    fn: {
      type: Function,
    },
  },
  methods: {
    emitClick() {
      this.$emit("click", this.fn);
    },
  },
});
</script>

<style lang="scss">
.button {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  cursor: pointer;
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
