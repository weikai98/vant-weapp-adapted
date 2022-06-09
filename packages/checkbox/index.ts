import { VantComponent } from '../common/components'

VantComponent({
  props: {
    name: String,
    value: Boolean,
    disabled: Boolean,
    shape: {
      type: String,
      value: 'square'
    },
    checkedColor: {
      type: String,
      value: ''
    },
    border: Boolean,
    label: String
  },
  methods: {
    onClick() {
      if (this.data.disabled) return
      this.$emit('change', !this.data.value)
    }
  }
})
