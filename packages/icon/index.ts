import { VantComponent } from '../common/components'

VantComponent({
  props: {
    iconClass: {
      type: String
    },
    size: {
      type: String || Number,
      value: '16px'
    },
    icon: String,
    hidden: Boolean
  },
  methods: {
    click(e: WechatMiniprogram.TouchEvent) {
      this.$emit('tap', e)
    }
  }
})
