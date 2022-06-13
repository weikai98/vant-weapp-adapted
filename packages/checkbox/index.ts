import { useParent } from '../common/relation'
import { VantComponent } from '../common/components'

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance

VantComponent({
  relation: useParent('checkbox-group'),
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
  data: {
    direction: 'horizontal',
    parentDisabled: false
  },
  methods: {
    onClick() {
      const { disabled, parentDisabled, value } = this.data
      if (disabled || parentDisabled) return

      // 修改group数据
      if (this.parent) {
        this.setParentValue(this.parent, !value)
      } else {
        this.$emit('change', !value)
      }
    },
    setParentValue(parent: TrivialInstance, value: boolean) {
      const parentValue: string[] = [...parent.data.value]
      const { label, name } = this.data
      const { max, min } = parent.data
      if (value) {
        if (max && parentValue.length >= max) return
        if (parentValue.indexOf(label || name) === -1) {
          parentValue.push(label || name)
          this.$emit('change', parentValue, { bubbles: true, composed: true })
        }
      } else {
        if (min && parentValue.length <= min) return
        const index = parentValue.indexOf(label || name)
        if (index !== -1) {
          parentValue.splice(index, 1)
          this.$emit('change', parentValue, { bubbles: true, composed: true })
        }
      }
    }
  }
})
