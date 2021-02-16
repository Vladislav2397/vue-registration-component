<template lang="pug">
.register
  form.register__form
    h1.register__title Регистрация
    .register__subtitle Уже есть аккаунт?&nbsp;
      a.register__link(href="#") Войти

    RegisterField(
      label="Имя",
      placeholder="Введите свое имя",
      :showError="isShowErrorField(isValidName)"
      v-model="name"
    )

    RegisterField(
      label="Email",
      placeholder="Введите ваш email",
      :showError="isShowErrorField(isValidEmail)"
      v-model="email"
    )

    RegisterField(
      label="Номер телефона",
      placeholder="Введите номер телефона",
      :showError="isShowErrorField(isValidPhone)"
      v-model="phone"
    )

    RegisterDropdownField(
      label="Язык",
      :items="languages",
      @select="getSelectedLanguage"
    )

    .register__checkbox
      Checkbox(@check="getChecked")
      span.register__checkbox-value
        | Принимаю&nbsp;
        a.register__link(href="#") условия&nbsp;
        | использования

    Button(value="Зарегистрироваться" :isDisabled="!isValidate")
</template>

<script>
import RegisterField from "@/components/RegisterField.vue";
import RegisterDropdownField from "@/components/RegisterDropdownField.vue";
import Checkbox from "@/components/Checkbox.vue";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      languages: ["Русский", "Английский", "Испанский", "Французский"],
      name: null,
      email: null,
      phone: null,
      language: null,
      isCheck: false,
      isValidName: null,
      isValidEmail: null,
      isValidPhone: null,
      isValidLanguage: null,
      regExpressions: {
        name: /^[a-zA-Z,а-яёА-ЯЁ,\-,\s]+$/,
        // eslint-disable-next-line no-useless-escape
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        // eslint-disable-next-line no-useless-escape
        phone: /^\+\d\(?\d{3}\)?\-?\d{3}\-?\d{2}\-?\d{2}$/
      }
    };
  },
  components: {
    RegisterField,
    RegisterDropdownField,
    Checkbox,
    Button
  },
  computed: {
    isValidate() {
      return (
        this.isValidName &&
        this.isValidEmail &&
        this.isValidPhone &&
        this.isCheck &&
        this.isValidLanguage
      );
    }
  },
  methods: {
    validField(regExpName, text) {
      return this.regExpressions[regExpName].test(text);
    },
    validLanguage(lang) {
      return this.languages.find(elem => elem === lang);
    },
    isShowErrorField(isValid) {
      return isValid == null ? true : isValid;
    },
    getSelectedLanguage(lang) {
      this.language = lang.toString();
    },
    getChecked(isCheck) {
      this.isCheck = isCheck;
    }
  },
  watch: {
    name(newVal) {
      this.isValidName = Boolean(this.validField("name", newVal));
    },
    email(newVal) {
      this.isValidEmail = Boolean(this.validField("email", newVal));
    },
    phone(newVal) {
      this.isValidPhone = Boolean(this.validField("phone", newVal));
    },
    language(newVal) {
      this.isValidLanguage = Boolean(this.validLanguage(newVal));
    }
  }
};
</script>

<style lang="scss">
$dark-color: #2c2738;
$link-color: #0880ae;

.register {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 460px;
  min-width: 360px;
  max-width: 460px;

  &__form {
    width: 100%;
    height: 100%;
    text-align: left;
    border-radius: 24px;
    background: #fff;
    padding: 40px 30px;
  }

  &__title {
    font-size: 34px;
    margin-bottom: 8px;
  }

  &__subtitle {
    margin-bottom: 50px;
  }

  &__link {
    text-decoration: none;
    color: $link-color;
  }

  &__checkbox {
    display: flex;
    margin-bottom: 35px;

    &-value {
      margin-left: 8px;
    }
  }
}
</style>
