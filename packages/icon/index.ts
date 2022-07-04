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
    color: String,
    icon: String,
    hidden: Boolean
  },
  methods: {
    click(e: WechatMiniprogram.TouchEvent) {
      this.$emit('click', e)
    }
  }
})
