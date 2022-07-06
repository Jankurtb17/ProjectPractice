import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import TheContainer from './Base/TheContainer'
import router from './router/index.js'
import 'aos/dist/aos.css';

const app = createApp(App)

app.component('TheContainer', TheContainer)
app.use(router)
app.mount('#app')
