import { VantComponent } from '../common/components'

type PickItemType = {
  label: string | number
  value: string | number
  children: any[]
}

VantComponent({
  props: {
    showToolbar: {
      type: Boolean,
      value: true
    },
    maxDate: String,
    minDate: String,
    title: {
      type: String,
      value: ''
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    visibleItemCount: {
      type: Number,
      value: 6
    },
    itemHeight: {
      type: Number,
      value: 40
    }
  },
  data: {
    dateColumns: [] as PickItemType[]
  },
  created() {
    const dateColumns: PickItemType[] = []
    const { minDate, maxDate } = this.data
    const minYear = !minDate
      ? new Date().getFullYear() - 10
      : new Date(minDate).getFullYear()
    const maxYear = !maxDate
      ? new Date().getFullYear() + 10
      : new Date(maxDate).getFullYear()
    const minMonth = !minDate ? 1 : new Date(minDate).getMonth() + 1
    const maxMonth = !maxDate ? 12 : new Date(maxDate).getMonth() + 1

    const minDay = 1

    for (let year = minYear; year <= maxYear; year++) {
      const yearItem: PickItemType = {
        label: year,
        value: year,
        children: []
      }

      for (let month = minMonth; month <= maxMonth; month++) {
        const monthItem: PickItemType = {
          label: month,
          value: `${year}-${month}`,
          children: []
        }
        yearItem.children.push(monthItem)
        const maxDay = new Date(year, month, 0).getDate()
        for (let day = minDay; day <= maxDay; day++) {
          const dayItem = {
            label: day,
            value: `${year}-${month}-${day}`
          }
          monthItem.children.push(dayItem)
        }
      }
      dateColumns.push(yearItem)
    }
    this.setData({
      dateColumns
    })
  },
  methods: {
    onChange(e: WechatMiniprogram.TouchEvent) {
      const times = e.detail
      this.$emit('change', times.values[2])
    },
    onConfirm(e: WechatMiniprogram.TouchEvent) {
      const times = e.detail
      this.$emit('confirm', times.values[2])
    },
    onCancel(e: WechatMiniprogram.TouchEvent) {
      const times = e.detail
      this.$emit('cancel', times.values[2])
    }
  }
})
