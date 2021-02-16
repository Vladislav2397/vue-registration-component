<template lang="pug">
button.btn(:disabled="isDisabled")
  span.btn__value {{ value }}
</template>

<script>
export default {
  props: {
    value: String,
    isDisabled: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
$main-active-color: #0880ae;
$btn-text-color: #ebf4f8;

.btn {
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background: $main-active-color;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $btn-text-color;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 4px #2c273814, 0px 4px 8px #2c273814;

  &:hover {
    box-shadow: 0px 12px 24px #2c273814, 0px 24px 48px #2c273829;
  }

  &:active {
    border: 2px solid #2c2738db;
    box-shadow: 0px 2px 4px #2c273800, 0px 4px 8px #2c273814;
  }

  &:disabled {
    background: #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    color: #2c2738;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
}
</style>
