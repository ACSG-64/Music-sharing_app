<template>
  <div class="text-white text-center font-bold p-4 mb-4"
       v-show="reg_show_alert" :class="reg_alert_variant">
    {{ reg_alert_msg }}
  </div>
  <vee-form :validation-schema="registerSchema" @submit="register"
            :initial-values="userData">
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field type="text" name="name"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                         transition duration-500 focus:outline-none focus:border-black rounded"
                 placeholder="Enter Name"/>
      <ErrorMessage class="text-red-600" name="name"/>
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">
        {{ $t('register_form.email_label') }}
      </label>
      <vee-field type="email" name="email"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                         transition duration-500 focus:outline-none focus:border-black rounded"
                 placeholder="Enter Email"/>
      <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">
        {{ $t('register_form.age_label') }}
      </label>
      <vee-field type="number" name="age"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                         transition duration-500 focus:outline-none focus:border-black rounded"/>
      <ErrorMessage class="text-red-600" name="age"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">
        {{ $t('register_form.password_label') }}
      </label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input class="block w-full py-1.5 px-3 text-gray-800 border
                border-gray-300 transition duration-500 focus:outline-none
                focus:border-black rounded" type="password"
               placeholder="Password" v-bind="field"/>
        <div class="text-red-600" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
      <ErrorMessage class="text-red-600" name="password"/>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">
        {{ $t('register_form.conf_password_label') }}
      </label>
      <vee-field type="password" name="confirm_password"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                         transition duration-500 focus:outline-none focus:border-black rounded"
                 placeholder="Confirm Password"/>
      <ErrorMessage class="text-red-600" name="confirm_password"/>
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">
        {{ $t('register_form.country_label') }}
      </label>
      <vee-field as="select" name="country"
                 class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                         transition duration-500 focus:outline-none focus:border-black rounded">
        <option value="NA" disabled>{{ $t('register_form.select_country_option') }}</option>
        <option value="Colombia">Colombia</option>
        <option value="Germany">Germany</option>
        <option value="Mexico">Mexico</option>
        <option value="USA">United States</option>
      </vee-field>
      <ErrorMessage class="text-red-600" name="country"/>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field type="checkbox" name="tos" value="1"
                 class="w-4 h-4 float-left -ml-6 mt-1 rounded"/>
      <i18n-t class="inline-block" keypath="register.accept_TOS" tag="label">
        <a href="#">{{ $t('register.TOS') }}</a>
      </i18n-t>
      <ErrorMessage class="text-red-600" name="tos"/>
    </div>
    <button type="submit" :disabled="reg_in_submission"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
      {{ $t('form.submit') }}
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      registerSchema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:120',
        password: 'required|min:8|max:100',
        confirm_password: 'passwords_mismatch:@password',
        country: 'required|country_excluded:NA',
        tos: 'tos',
      },
      userData: {
        country: 'NA',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait, your account is being created.',
    };
  },
  methods: {
    async register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'Please wait, your account is being created.';

      try {
        await this.$store.dispatch('register', values);
      } catch (e) {
        this.reg_in_submission = false;
        this.reg_alert_variant = 'bg-red-500';
        this.reg_alert_msg = 'An error occurred, make sure you dont have an account and try again.';
        return;
      }

      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Account created successfully!';
      window.location.reload();
    },
  },
};
</script>
