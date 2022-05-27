import { requestAnimationFrame } from "../common/utils"
import { VantComponent } from "../common/components"

const autoCssTransition = (name: string) => ({
  enter: `enter ${name}-enter`,
  "enter-active": `enter-active ${name}-enter-active`,
  "enter-to": `enter-to ${name}-enter-to`,
  leave: `leave ${name}-leave`,
  "leave-active": `leave-active ${name}-leave-active`,
  "leave-to": `leave-to ${name}-leave-to`,
})

VantComponent({
  classes: [
    "enter-class",
    "enter-active-class",
    "enter-to-class",
    "leave-class",
    "leave-active-class",
    "leave-to-class",
  ],
  props: {
    show: {
      type: Boolean,
      value: true,
      observer: "oberverShow",
    },
    name: {
      type: String,
      value: "fade",
    },
    duration: {
      type: Number,
      value: 1000,
    },
  },
  data: {
    visible: false,
    classes: "",
  },
  mounted() {
    if (this.data.show) {
      this.oberverShow(true)
    }
  },
  methods: {
    oberverShow(v: boolean, oldv?: boolean) {
      if (v === oldv) return
      if (v) {
        this.enter()
      } else {
        this.leave()
      }
    },
    enter() {
      const { name } = this.data
      const classNames = autoCssTransition(name)
      this.setData({
        visible: true,
        classes: classNames["enter"],
      })
      this.$emit("beforeEnter")
      requestAnimationFrame(() => {
        this.setData({
          classes: classNames["enter-active"],
        })
        this.$emit("enter")

        requestAnimationFrame(() => {
          this.setData({
            classes: classNames["enter-to"],
          })
          this.$emit("afterEnter")
        })
      })
    },
    leave() {
      const { name, duration } = this.data
      const classNames = autoCssTransition(name)
      this.$emit("beforeLeave")
      this.setData({
        classes: classNames["leave"],
      })

      requestAnimationFrame(() => {
        this.$emit("leave")
        this.setData({
          classes: classNames["leave-active"],
        })

        requestAnimationFrame(() => {
          setTimeout(() => {
            this.setData({
              visible: false,
            })
            this.$emit("afterLeave")
          }, duration)
          this.setData({
            classes: classNames["leave-to"],
          })
        })
      })
    },
  },
})
