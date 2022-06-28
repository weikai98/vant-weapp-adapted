import { VantComponent } from '../common/components'

VantComponent({
  props: {
    item: {
      type: Object,
      value: {}
    },
    fields: {
      type: Object,
      value: {
        label: 'label',
        value: 'value'
      }
    },
    itemHeight: {
      type: Number,
      value: 40
    }
  }
})
