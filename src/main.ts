import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 挂载路由
import store from './store'; // 挂载数据中心
import ant from "./utils/ant";
import "lib-flexible/flexible";
import "vant/lib/index.css"; // 全局引入样式
import "./utils/rem"

createApp(App)
.use(router)
.use(store)
.use(ant)
.mount('#app')
