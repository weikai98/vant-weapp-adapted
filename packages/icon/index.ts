import { VantComponent } from "../common/components";

VantComponent({
  props: { 
    iconClass: {
      type: String
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