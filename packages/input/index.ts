import { VantComponent } from '../common/components'

VantComponent({
  props: {
    type: {
      type: String,
      value: 'text'
    },
    value: {
      type: String || Number,
      observer(this, value) {
        this.value = value
        this.setShowClearable()
        this.setData({
          innerValue: value
        })
      }
    },
    minlength: Number,
    maxlength: {
      type: Number,
      value: 140
    },
    placeholder: String,
    placeholderStyle: String,
    placeholderClass: String,
    cursorSpacing: {
      type: Number,
      value: 0
    },
    password: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    leftIcon: String,
    rightIcon: String,
    focus: Boolean,
    confirmType: {
      type: String,
      value: 'done'
    },
    showConfirmBar: {
      type: Boolean,
      value: true
    },
    disableDefaultPadding: {
      type: Boolean,
      value: true
    },
    alwaysEmbed: Boolean,
    confirmHold: Boolean,
    cursor: Number,
    fixed: Boolean,
    autosize: null,
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    holdKeyboard: Boolean,
    errorMessage: {
      type: String,
      value: ''
    },
    border: {
      type: Boolean,
      value: true
    },
    customStyle: String
  },
  data: {
    focused: false,
    innerValue: '',
    showClearable: false
  },
  created() {
    const { focus, value } = this.data
    this.value = value
    this.setShowClearable()
    this.setData({
      focused: focus,
      innerValue: value
    })
  },
  methods: {
    setShowClearable() {
      const { clearable, disabled, readonly } = this.data
      const flag = this.value && this.value !== 0
      this.setData({
        showClearable: !!flag && clearable && !disabled && !readonly
      })
    },

    onInput(e: WechatMiniprogram.TextareaInput | WechatMiniprogram.Input) {
      const value = e.detail.value
      this.value = value
      this.setShowClearable()
      this.setData({
        innerValue: value
      })
      // wx.nextTick(() => {
      this.$emit('input', e.detail)
      this.$emit('change', e.detail)
      // })
    },
    onBlur(e: WechatMiniprogram.InputBlur | WechatMiniprogram.TextareaBlur) {
      const value = e.detail.value
      this.value = value
      this.setShowClearable()
      this.setData({
        focused: false,
        innerValue: value
      })
      this.$emit('blur', e.detail)
    },
    onFocus(e: WechatMiniprogram.InputFocus | WechatMiniprogram.TextareaFocus) {
      const value = e.detail.value
      this.value = value
      this.setShowClearable()
      this.setData({
        focused: true,
        innerValue: value
      })

      this.$emit('focus', e.detail)
    },
    onConfirm(
      e: WechatMiniprogram.InputConfirm | WechatMiniprogram.TextareaConfirm
    ) {
      const value = e.detail.value
      this.value = value
      this.setShowClearable()
      this.setData({
        innerValue: value
      })
      this.$emit('confirm', e.detail)
    },
    onKeyboardHeightChange(
      e:
        | WechatMiniprogram.InputKeyboardHeightChange
        | WechatMiniprogram.TextareaKeyboardHeightChange
    ) {
      this.$emit('keyboardheightchange', e.detail)
    },
    onLineChange(e: WechatMiniprogram.TextareaLineChange) {
      this.$emit('linechange', e.detail)
    },
    onClickInput(e: WechatMiniprogram.TouchEvent) {
      this.$emit('click-input', e.detail)
    },
    onClear(e: WechatMiniprogram.TouchEvent) {
      this.value = ''
      this.setShowClearable()
      this.setData({
        innerValue: this.value
      })
      this.$emit('clear', e.detail)
      this.$emit('change', { value: '' })
    },
    noop() {}
  }
})
