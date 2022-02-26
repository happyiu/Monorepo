import WForm from '../'

export default {
  title: 'WForm',
  component: WForm
}

export const Text = () => ({
  components: { WForm },
  template: '<w-form></w-form>',
  data() {
    return {
      
    }
  },
})