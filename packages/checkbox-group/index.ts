import { VantComponent } from '../common/components'
import { useChildren } from '../common/relation'

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance

VantComponent({
  relation: useChildren('checkbox', function (this, target) {
    this.updateChild(target)
  }),
  props: {
    value: {
      type: Array,
      value: [],
      observer: 'updateChildren'
    },
    disabled: {
      type: Boolean,
      value: false,
      observer: 'updateChildren'
    },
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 0
    },
    direction: {
      type: String,
      value: 'horizontal'
    }
  },
  methods: {
    updateChildren() {
      this.children.forEach((child) => {
        this.updateChild(child)
      })
    },
    updateChild(child: TrivialInstance) {
      const { value, disabled, direction } = this.data
      child.setData({
        value: value.indexOf(child.data.label) !== -1,
        parentDisabled: disabled,
        direction
      })
    }
  }
})
