<template>
  <input
    :style="'background: ' + bg"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
export default {
  props: ["type", "placeholder", "bg", "value"],
};
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  box-shadow: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  width: 100%;
  background: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>
