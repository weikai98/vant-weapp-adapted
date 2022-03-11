import { VantComponent } from "../common/components";

VantComponent({
  props: {
    show: Boolean,
    zIndex: Number,
    transparent: Boolean,
    lockScroll: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onMaskClick () {
      this.$emit('clickMask')
    }
  }
})