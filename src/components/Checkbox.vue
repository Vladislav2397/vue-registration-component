<template lang="pug">
.checkbox(@click="toggleCheck")
  span.checkbox__icon(v-if="isCheck") &#10003;
</template>

<script>
export default {
  data() {
    return {
      isCheck: false
    };
  },
  methods: {
    toggleCheck() {
      this.isCheck = !this.isCheck;
      this.$emit("check", this.isCheck);
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #dbe2ea;
$main-active-color: #0880ae;

.checkbox {
  width: 24px;
  height: 24px;
  border: 1px solid $main-color;
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
    font-size: 24px;
    color: $main-active-color;
    cursor: default;
  }
}
</style>
