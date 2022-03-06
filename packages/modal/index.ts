import { VantComponent } from "../common/components";

VantComponent({
  props: {
    show: Boolean,
    lockScroll: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onModalClick () {
      this.$emit('clickModal')
    }
  }
})