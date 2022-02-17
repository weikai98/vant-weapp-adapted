import { VantComponent } from "../common/components";

VantComponent({
  props: { 
    iconClass: {
      type: String,
      value: 'ipm-icon'
    },
    size: {
      type: String,
      value: '12'
    },

    disabled: Boolean,
    icon: String
  },
  mounted () { 
    console.log(this.data.iconClass)
  },
  data: {
  },
  methods: {
    
  }
})