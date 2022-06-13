import { useParent } from '../common/relation'
import { VantComponent } from '../common/components'

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance
type Value = string | number | boolean
VantComponent({
  relation: useParent('radio-group'),
  props: {
    name: String,
    value: String || Number || Boolean,
    disabled: Boolean,
    shape: {
      type: String,
      value: 'round'
    },
    checkedColor: {
      type: String,
      value: ''
    },
    border: Boolean,
    label: String
  },
  data: {
    direction: 'horizontal',
    parentDisabled: false
  },
  methods: {
    onClick() {
      const { disabled, parentDisabled, value, name, label } = this.data
      if (disabled || parentDisabled) return
      const newValue = name || label
      // 修改group数据
      if (this.parent) {
        this.setParentValue(this.parent, newValue)
      } else {
        if (value !== newValue) this.$emit('change', newValue)
      }
    },
    setParentValue(parent: TrivialInstance, value: Value) {
      const parentValue: Value = parent.data.value
      if (parentValue !== value) {
        this.$emit('change', value, { bubbles: true, composed: true })
      }
    }
  }
})
