import './assets/css/main.css'
import { createApp } from 'vue'

// import { createPinia } from 'pinia'

import store from './store'

import axios from 'axios'

import 'toastify-js/src/toastify.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { Icon } from '@iconify/vue'
app.component('icon', Icon)

import QrcodeVue from 'qrcode.vue'
app.component('QRCodeVue', QrcodeVue)

import VueClipboard from 'vue3-clipboard'

import QrReader from 'vue3-qr-reader';

import toastify from 'toastify-js'
app.config.globalProperties.$toastify = toastify

import { defineRule } from 'vee-validate'

defineRule('required', (value) => {
  if (!value || !value.length) {
    return `This field is required`
  }
  return true
})

defineRule('email', (value) => {
  // Field is empty, should not pass
  if (!value) {
    return 'This field is required'
  }
  // Check if email
  let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})

defineRule('minLength', (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

app.use(PrimeVue);

// app.use(PrimeVue, {
//   unstyled: true
// });

import Sidebar from 'primevue/sidebar';
app.component('Sidebar', Sidebar)

import ScrollTop from 'primevue/scrolltop';
app.component('ScrollTop', ScrollTop)

import Dropdown from 'primevue/dropdown';
app.component('Dropdown', Dropdown)

import Dialog from 'primevue/dialog';
app.component('vDialog', Dialog)

import VueSelect  from "vue-select";
app.component("vSelect", VueSelect)
import "vue-select/dist/vue-select.css";


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Paginator from 'primevue/paginator';

app.component('DataTable', DataTable)
app.component('TableColumn', Column)
app.component('Paginator', Paginator)

app.config.globalProperties.$axios = axios

import config from '@/https/config'
app.config.globalProperties.$config = config

import $request from '@/https/axios'
app.config.globalProperties.$request = $request

// app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueSweetAlert2, {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
  reverseButtons: false,
  buttonsStyling: true,
  customClass: {
    confirmButton: 'tw-bg-green-600 tw-text-white tw-py-3',
    cancelButton: 'tw-bg-red-600 tw-text-white tw-py-3'
  }
})
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})


app.use(QrReader)

app.mount('#app')
