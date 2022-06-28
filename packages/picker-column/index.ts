import { VantComponent } from '../common/components'

VantComponent({
  props: {
    columns: {
      type: Array,
      value: []
    },
    fields: {
      type: Object,
      value: {
        label: 'label',
        value: 'value'
      }
    },
    level: {
      type: Number || String,
      value: 1
    },
    visibleItemCount: {
      type: Number,
      value: 6
    },
    itemHeight: {
      type: Number,
      value: 40
    },
    activeIndex: {
      type: Number,
      value: 0,
      observer: 'changeIndex'
    }
  },
  data: {
    startY: 0,
    endY: 0,
    moveY: 0,
    duration: 0,
    deltY: '+ 0'
  },
  created() {
    this.changeIndex({ moveY: 0 })
  },
  methods: {
    changeIndex({ moveY }) {
      const { activeIndex, itemHeight } = this.data
      const num = -activeIndex * itemHeight - itemHeight / 2 + (moveY || 0)
      const Y = num > 0 ? '+ ' + num : '- ' + Math.abs(num)
      this.setData({
        deltY: Y
      })
    },
    onStart(e: WechatMiniprogram.TouchEvent) {
      this.setData({
        startY: e.changedTouches[0].clientY,
        duration: 0
      })
    },
    onEnd(e: WechatMiniprogram.TouchEvent) {
      const { startY, itemHeight, level, activeIndex, columns } = this.data
      const endY = e.changedTouches[0].clientY
      const Y = endY - startY
      const index = Math.round(Y / itemHeight)
      const newActiveIndex =
        index > 0
          ? activeIndex - index < 0
            ? 0
            : activeIndex - index
          : activeIndex - index >= columns.length
          ? columns.length - 1
          : activeIndex - index
      this.setData({
        duration: 200
      })
      if (newActiveIndex === activeIndex) {
        wx.nextTick(() => {
          this.changeIndex({ moveY: 0 })
        })
      }
      this.$emit('change', {
        level,
        activeItem: columns[newActiveIndex],
        activeIndex: newActiveIndex
      })
    },
    onMove(e) {
      const { itemHeight, startY, columns, activeIndex } = this.data
      const moveY = e.changedTouches[0].clientY - startY
      const poor_Index = columns.length - activeIndex - 1
      const poor_0_Index = activeIndex
      if (moveY > 0 && poor_0_Index * itemHeight < Math.abs(moveY)) return
      if (moveY < 0 && poor_Index * itemHeight < Math.abs(moveY)) return

      this.changeIndex({ moveY })
    }
  }
})
