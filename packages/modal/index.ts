import { VantComponent } from "../common/components";

VantComponent({
  props: {
    show: Boolean
  },
  methods: {
    onModalClick () {
      this.$emit('clickModal')
     }
  }
})