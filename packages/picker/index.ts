import { VantComponent } from '../common/components'

VantComponent({
  props: {
    columns: {
      type: Array,
      value: [],
      observer: 'handleColumns'
    },
    fields: {
      type: Object,
      value: {
        label: 'label',
        value: 'value'
      }
    },
    showToolbar: {
      type: Boolean,
      value: true
    },
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
    levelListMap: {},
    idListMap: {},
    activeIndexMap: {}
  },
  methods: {
    handleColumns() {
      const levelListMap = {}
      const idListMap = {}
      const { columns, fields, activeIndexMap } = this.data
      const _handleIdListMapDfs = (arr, level = 1, parentId = -1) => {
        if (!arr || !arr.length) return

        arr.forEach((e) => {
          const { children, ...res } = e
          const id = e[fields.value || 'value']
          if (!idListMap[parentId]) {
            idListMap[parentId] = [res]
          } else {
            idListMap[parentId].push(res)
          }
          _handleIdListMapDfs(children, level + 1, id)
        })
      }
      _handleIdListMapDfs(columns)

      const _handleLevelListMapDfs = (arr, level = 1) => {
        if (!arr || !arr.length) return
        let defaultIndex = arr.findIndex((e) => e.check)
        if (defaultIndex === -1) defaultIndex = 0
        const defaultItem = arr[defaultIndex]
        activeIndexMap[level] = defaultIndex

        arr.forEach((v) => {
          const { children, ...res } = v
          if (!levelListMap[level]) {
            levelListMap[level] = [res]
          } else {
            levelListMap[level].push(res)
          }
        })

        _handleLevelListMapDfs(defaultItem.children, level + 1)
      }
      _handleLevelListMapDfs(columns)
      this.idListMap = idListMap
      this.setData({
        activeIndexMap,
        levelListMap
      })
    },
    onConfirm() {
      const { fields, activeIndexMap } = this.data
      const details = this.getActiveValues({
        fields,
        activeIndexMap
      })
      this.$emit('confirm', details)
    },
    onCancel() {
      const { fields, activeIndexMap } = this.data
      const details = this.getActiveValues({
        fields,
        activeIndexMap
      })
      this.$emit('cancel', details)
    },
    onChange(e: WechatMiniprogram.TouchEvent) {
      const { fields, levelListMap, activeIndexMap } = this.data
      const { level, activeIndex, activeItem } = e.detail
      const id = activeItem[fields.value || 'value']
      levelListMap[level + 1] = this.idListMap[id]
      activeIndexMap[level] = activeIndex
      if (levelListMap[level + 1]) {
        if (levelListMap[level + 1].length - 1 < activeIndexMap[level + 1]) {
          activeIndexMap[level + 1] = levelListMap[level + 1].length - 1
        }
        this.setData({
          activeIndexMap,
          levelListMap
        })
      } else {
        this.setData({
          activeIndexMap
        })
      }
      const details = this.getActiveValues({ fields, activeIndexMap })
      this.$emit('change', details)
    },
    getActiveValues({ fields, activeIndexMap }) {
      const { columns } = this.data
      const values: any[] = []
      const activeItems: any[] = []
      const activeIndexs: number[] = []
      const dfs = (arr, level = 1) => {
        if (!arr || !arr.length) return
        const activeLevelIndex = activeIndexMap[level]
        const activeLevelItem = arr[activeLevelIndex]
        const { children, ...res } = activeLevelItem
        const value = fields.value || 'value'
        values.push(activeLevelItem[value])
        activeItems.push(res)
        activeIndexs.push(activeLevelIndex)
        dfs(children, level + 1)
      }
      dfs(columns)
      if (values.length === 1) {
        return {
          value: values[0],
          activeItem: activeItems[0],
          activeIndexs: activeIndexs[0]
        }
      } else {
        return {
          values,
          activeItems,
          activeIndexs
        }
      }
    }
  }
})
