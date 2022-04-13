import { VantComponent } from "../common/components";

VantComponent({
  props: {
    id: {
      type: String,
      value: 'mu-toast'
    },
    show: Boolean,
    type: {
      type: String, // loading success fail text
      value: 'text'
    },
    position: {
      type: String,
      value: 'middle'
    },
    message: String,
    mask: Boolean, // 显示遮罩
    icon: String,
    zIndex: {
      type: Number,
      value: 1000
    },
    duration: {
      type: Number,
      value: 2000
    }, // 延时多长时间消失
    selector: {
      type: String,
      value: 'mu-toast'
    }, // 自定义选择器
  },
  methods: {

  }
})