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
    mask: {
      type: Boolean,
      value: true
    },
    round: Boolean,
    closeOnClickMask: {
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
    onMaskClick () {
      this.$emit('clickMask')
      if (this.data.closeOnClickMask) {
        this.$emit('close')
      }
    },
    open () {
      this.$emit('open')
    }
  }
})