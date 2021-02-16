<template lang="pug">
.register-field
  p.register-field__label {{ label }}
  input.register-field__field(
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  )
  p.register-field__error-msg(v-show="!showError") Введено некорректное значение
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    errorMsg: String,
    showError: Boolean
  }
};
</script>

<style lang="scss">
$text-color: #7c9cbf;
$error-text-color: #ff7171;
$border-color: #dbe2ea;
$border-active-color: #0880ae;

.register-field {
  position: relative;

  &__label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 7px;
  }

  &__field {
    border: 1px solid $border-color;
    border-radius: 6px;
    height: 52px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    padding-left: 12px;
    outline: none;
    margin-bottom: 32px;

    &::placeholder {
      color: $text-color;
    }

    &:focus {
      border: 2px solid $border-active-color;
    }
  }

  &__error-msg {
    position: absolute;
    bottom: 0;
    margin: 8px 0;
    font-size: 14px;
    color: $error-text-color;
  }
}
</style>
