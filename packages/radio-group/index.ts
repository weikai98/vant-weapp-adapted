import { VantComponent } from '../common/components'
import { useChildren } from '../common/relation'

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance

VantComponent({
  relation: useChildren('radio', function (this, target) {
    this.updateChild(target)
  }),
  props: {
    value: {
      type: String || Number || Boolean,
      value: '',
      observer: 'updateChildren'
    },
    disabled: {
      type: Boolean,
      value: false,
      observer: 'updateChildren'
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
        value: value,
        parentDisabled: disabled,
        direction
      })
    }
  }
})
