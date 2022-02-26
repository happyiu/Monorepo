<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'WForm',
  provide() {
    return {
      form: this,
    }
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter(child => child.prop)
        .map(child => child.validate());
      
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  },
}
</script>

<style scoped>
  .form {
    width: 100%;
    height: 200px;
    border: 1px solid red;
  }
</style>