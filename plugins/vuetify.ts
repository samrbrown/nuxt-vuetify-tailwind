// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import '@/assets/main.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
  })
  app.vueApp.use(vuetify)
})