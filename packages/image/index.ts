import { VantComponent } from '../common/components'

VantComponent({
  props: {
    src: String,
    alt: String,
    width: String,
    height: String,
    fit: {
      type: String,
      value: ''
    }, // 填充方式
    lazyLoad: Boolean, // 是否开启懒加载
    preview: Boolean, // 开启图片预览功能

    useErrorSlot: Boolean
  },
  data: {
    error: false
  },
  methods: {
    onError(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        error: true
      })
      this.$emit('onError', e.detail)
    },
    onClick(e: WechatMiniprogram.TouchEvent) {
      this.$emit('click', e.detail)
    }
  }
})
