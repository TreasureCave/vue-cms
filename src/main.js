//入口文件

import Vue from 'vue'
import{Header} from 'mint-ui'
Vue.component(Header.name,Header)
//导入App根组件
import app from './App.vue'
//导入mui的样式
import './lib//mui/css/mui.min.css'
 var vm = new Vue({
     el:"#app",
     render:c=>c(app)
 })