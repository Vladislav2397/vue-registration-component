<template lang="pug">
.register-dropdown
  p.register-dropdown__label {{ label }}
  .register-dropdown__field(@click="toggleDropdown") {{ selectedItem || label }}
    i.register-dropdown__icon &#10097;
    ul.register-dropdown__items(v-if="isDropdownShow")
      li.register-dropdown__item(v-for="item in items" @click="selectItem(item)") {{ item }}
</template>

<script>
export default {
  data() {
    return {
      isDropdownShow: false,
      selectedItem: null
    };
  },
  props: {
    modelValue: String,
    label: String,
    items: Array,
    select: String
  },
  methods: {
    toggleDropdown() {
      this.isDropdownShow = !this.isDropdownShow;
    },
    selectItem(item) {
      this.selectedItem = item;
    }
  },
  watch: {
    selectedItem(newVal) {
      this.$emit("select", newVal);
    }
  }
};
</script>

<style lang="scss">
$text-color: #7c9cbf;
$error-text-color: #ff7171;
$border-color: #dbe2ea;
$border-active-color: #0880ae;
$dropdown-text-color: #756f86;
$dropdown-active-text-color: #ebf4f8;

.register-dropdown {
  margin-bottom: 32px;

  &__label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 7px;
  }

  &__field {
    height: 52px;
    width: 100%;
    padding: 0 12px;
    border: 1px solid $border-color;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 400;
    color: $text-color;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    transform: rotate(90deg);
    color: $border-active-color;
  }

  &__items {
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    position: absolute;
    background: #fff;
    border-radius: 6px;
    border: 1px solid $border-color;
    list-style: none;
    padding: 12px 0;
    z-index: 10;
  }

  &__item {
    color: $dropdown-text-color;
    padding-left: 15px;
    line-height: 44px;
    width: 100%;

    &:hover {
      background: $dropdown-active-text-color;
    }
  }
}
</style>
