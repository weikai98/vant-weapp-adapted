// @ts-nocheck
import { isObject } from '../common/validator'
import { requestAnimationFrame } from '../common/utils'

const getClassNames = (name: string) => ({
  enter: `mu-${name}-enter mu-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `mu-${name}-enter-to mu-${name}-enter-active enter-to-class enter-active-class`,
  leave: `mu-${name}-leave mu-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `mu-${name}-leave-to mu-${name}-leave-active leave-to-class leave-active-class`
})

export function transition(showDefaultValue: boolean) {
  return Behavior({
    properties: {
      customStyle: String,
      // @ts-ignore
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      // @ts-ignore
      duration: {
        type: Number || String || Object,
        value: 300,
        observer: 'observeDuration'
      },
      name: {
        type: String,
        value: 'fade'
      }
    },

    data: {
      type: '',
      inited: false,
      display: false
    },

    ready() {
      if (this.data.show === true) {
        this.observeShow(true, false)
      }
    },

    methods: {
      observeShow(value: boolean, old: boolean) {
        if (value === old) {
          return
        }

        value ? this.enter() : this.leave()
      },

      enter() {
        const { duration, name } = this.data
        const classNames = getClassNames(name)
        const currentDuration = isObject(duration) ? duration.enter : duration

        this.status = 'enter'
        this.$emit('before-enter')

        requestAnimationFrame(() => {
          if (this.status !== 'enter') {
            return
          }

          this.$emit('enter')

          this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration
          })

          requestAnimationFrame(() => {
            if (this.status !== 'enter') {
              return
            }

            this.transitionEnded = false
            this.setData({ classes: classNames['enter-to'] })
          })
        })
      },

      leave() {
        if (!this.data.display) {
          return
        }

        const { duration, name } = this.data
        const classNames = getClassNames(name)
        const currentDuration = isObject(duration) ? duration.leave : duration

        this.status = 'leave'
        this.$emit('before-leave')

        requestAnimationFrame(() => {
          if (this.status !== 'leave') {
            return
          }

          this.$emit('leave')

          this.setData({
            classes: classNames.leave,
            currentDuration
          })

          requestAnimationFrame(() => {
            if (this.status !== 'leave') {
              return
            }

            this.transitionEnded = false
            setTimeout(() => this.onTransitionEnd(), currentDuration)

            this.setData({ classes: classNames['leave-to'] })
          })
        })
      },

      onTransitionEnd() {
        if (this.transitionEnded) {
          return
        }

        this.transitionEnded = true
        this.$emit(`after-${this.status}`)

        const { show, display } = this.data
        if (!show && display) {
          this.setData({ display: false })
        }
      }
    }
  })
}
