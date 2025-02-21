import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
library.add(faHeart)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
