import { VantComponent } from "../common/components";

VantComponent({
  props: {
    show: Boolean, 
    zIndex: {
      type: Number,
      value: 10
    }, 
    position: {
      type: String,
      value: 'center'
    }, 
    round: Boolean,
    // overlay: {
    //   type: Boolean,
    //   value: true
    // }, 
    closeOnClickModal: {
      type: Boolean,
      value: true
    },
    closeable: Boolean,
    closeIcon: String,
    outsideCloseIcon: {
      type: Boolean,
      value: true
    },
    closeIconPosition: {
      type: String
    },
    lockScroll: {
      type: Boolean,
      value: true
    },
  },
  mounted () { 
    this.open()
  },
  methods: {
    onClockCloseIcon () { 
      this.$emit('close')
    },
    onModalClick () {
      this.$emit('clickModal')
      if (this.data.closeOnClickModal) {
        this.$emit('close')
      }
    },
    open () {
      this.$emit('open')
    }
  }
})