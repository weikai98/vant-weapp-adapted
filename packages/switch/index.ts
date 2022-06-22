import { VantComponent } from '../common/components'

VantComponent({
  props: {
    value: Boolean || String || Number,
    disabled: Boolean,
    activeText: String,
    inActiveText: String,
    activeValue: {
      type: Boolean || String || Number,
      value: true
    },
    inActiveValue: {
      type: Boolean || String || Number,
      value: false
    }
  },
  methods: {
    onClick() {
      const { value, activeValue, inActiveValue, disabled } = this.data
      if (disabled) return
      const v = value === activeValue ? inActiveValue : activeValue
      this.$emit('change', v)
    }
  }
})
