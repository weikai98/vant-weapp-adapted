import { VantComponent } from "../common/components";

VantComponent({
  props: { 
    type: {
      type: String,
      value: 'default'
    },
    icon: String,
    iconClass: String,
    size: {
      type: String,
      value: 'normal'
    },
    
    plain: Boolean,
    round: Boolean,
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    circle: Boolean
  },
  methods: {
    tap(event: WechatMiniprogram.TouchEvent) {
      this.$emit('tap', event);
    },
  }
})