import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
let instance = null
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#child') // 子应用还是挂在到自己的html中，父应用调用当前子应用时，会将子应用的整个html插入到设置的container中
}
if(window.__POWERED_BY_QIANKUN__) {
  // 父应用加载子应用执行时
  // 动态修改路径
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if(!window.__POWERED_BY_QIANKUN__) {
  // 子应用独立执行时
  render()
}
// 子应用的协议 规定导出的三个方法为Promise
export async function bootstrap(props) {
  // 启动时
}
export async function mount(props) {
  // 装载时
  // 通过props实现父子组件通信
  render(props)
}
export async function unmount(props) {
  // 卸载时
  instance.$destroy()
}
