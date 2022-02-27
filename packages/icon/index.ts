import { VantComponent } from "../common/components";

VantComponent({
  props: { 
    iconClass: {
      type: String,
      value: 'ipm-icon'
    },
    size: {
      type: String,
      value: '16'
    },
    icon: String
  },
  mounted () { 
  },
  data: {
  },
  methods: {
    click (e:WechatMiniprogram.TouchEvent) { 
      this.$emit('tap', e)
    }
  }
})