import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import firebaseMessaging from './firebase'
app.config.globalProperties.$messaging = firebaseMessaging

app.mount('#app')