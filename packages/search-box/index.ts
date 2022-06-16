import { VantComponent } from '../common/components'

VantComponent({
  props: {
    value: String,
    placeholder: String,
    round: {
      type: Boolean,
      value: true
    }
  },
  data: {
    border: true,
    focus: false
  },
  methods: {
    onChange(e: WechatMiniprogram.TouchEvent) {
      this.$emit('change', e)
    },
    onBlur(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        focus: false
      })
      this.$emit('foucs', e)
    },
    onFocus() {
      this.setData({
        focus: true
      })
    }
  }
})
