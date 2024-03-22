<template>
  <div class="">
    <div>
      <div class="mx-auto mb-4 w-32">
        <!-- <img src="@/assets/img/logo.svg" alt="" /> -->
      </div>
      <div class="text-center mb-3">
        <h3 class="text-2xl font-bold mb-0">Sign In</h3>
        <span class="text-sm block">Please, enter your details</span>
      </div>
      <div>
        <span class="text-xs text-red-600" v-for="(item, idx) in validationErrors" :key="idx">{{
          item
        }}</span>
      </div>
      <Form @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-2">
        <div>
          <label for="">Email</label>
          <Field name="email" class="input" placeholder="Email" type="email" rules="email" />
          <ErrorMessage name="email" class="text-xs text-red-600"></ErrorMessage>
        </div>

        <div>
          <label for="">Password</label>
          <Field name="password" v-slot="{ field }" rules="required">
            <div class="input-field">
              <input
                :type="typePassword ? 'password' : 'text'"
                name="password"
                id="password"
                placeholder="Password"
                v-bind="field"
              />
              <span class="password-iccon" role="button" @click="typePassword = !typePassword">
                <i-icon
                  :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                  class="form-icon"
                />
              </span>
            </div>
          </Field>
          <ErrorMessage name="password" class="text-xs text-red-600"></ErrorMessage>
        </div>

        <!-- <div class="text-right text-sm">
          Forgot Password?
          <router-link class="font-semibold text-primary" to="/forgot-password"
            >Click here</router-link
          >
        </div> -->

        <div class="text-center mt-3">
          <button
            class="btn-brand w-full"
            :disabled="isLoading || !meta.valid"
            :class="[
              isLoading
                ? 'bg-neutral-300 text-neutral-700'
                : meta.valid
                  ? ''
                  : 'bg-neutral-300 text-neutral-700'
            ]"
          >
            Login
          </button>
        </div>
        <!-- <div class="mt-3">
          <span class="flex justify-center gap-1 text-sm">
            <span>New User?</span>
            <router-link class="font-semibold text-primary" to="/register">Signup</router-link>
          </span>
        </div> -->
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },

  data() {
    return {
      typePassword: true,
      isLoading: false
    }
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      this.$router.push('/dashboard')
    },

  },
}
</script>
