import { VantComponent } from '../common/components'

VantComponent({
  props: {
    options: {
      type: Array,
      value: []
    },
    caption: {
      type: String,
      value: ''
    },
    diretion: {
      type: String,
      value: 'top'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    popupStyle: {
      type: String,
      value: ''
    },
    multiple: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isFold: false
  },
  methods: {
    onTitleClick() {
      const { disabled, isFold } = this.data
      if (disabled) return
      this.setData({
        isFold: !isFold
      })
    },
    onMaskClick() {
      this.setData({
        isFold: false
      })
    },
    onOptionItemClick(e: WechatMiniprogram.TouchEvent) {
      const { multiple } = this.data
      const item = e.currentTarget.dataset.item

      this.$emit('change', { value: item.value, item, multiple })
      if (!multiple) {
        this.onMaskClick()
      }
    }
  }
})
