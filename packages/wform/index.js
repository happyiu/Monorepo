import WForm from './src/wform.vue'

WForm.install = Vue => {
  Vue.component(WForm.name, WForm)
}

export default WForm