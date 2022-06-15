import { VantComponent } from '../common/components'

VantComponent({
  options: {
    styleIsolation: 'shared'
  },
  props: {
    title: String,
    value: String,
    isLink: Boolean,
    describe: String,
    leftIcon: String,
    rightIcon: String,
    border: {
      type: Boolean,
      value: true
    },
    focus: Boolean,
    customStyle: String,
    leftIconStyle: String,
    rightIconStyle: String
  },
  methods: {
    click(e: WechatMiniprogram.TouchEvent) {
      this.$emit('tap', e, { bubbles: true, composed: true })
    }
  }
})
