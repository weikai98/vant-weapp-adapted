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
    customStyle: String,
    leftIconStyle: String,
    rightIconStyle: String
  },
  methods: {
    click(e: WechatMiniprogram.TouchEvent) {
      this.$emit('click', e, { bubbles: true, composed: true })
    }
  }
})
