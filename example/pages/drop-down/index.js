import Page from '../../common/page';

Page({
  data: {
    caption: '更多',
    options: Array.from({ length: 5 }, (v, i) => ({label: `阴${i}`, value: `${i}` })),
  },
  onOptionItemClick () { },

  onChange (e) {
    const { value, multiple } = e.detail
    const { caption } =this.data
    let newCaption = caption
    if (!multiple) {
      this.data.options.forEach(v => {
        if (v.value === value) {
          v.check = !v.check
          newCaption = v.label
        } else { 
          v.check = false
        }
      })
    } else {
      this.data.options.forEach(v => {
        if (v.value === value) {
          v.check = !v.check
          // newCaption = newCaption ? `${newCaption},${v.label}` : v.label
        }
      })
    }
    this.setData({
      options: this.data.options,
      caption: newCaption
    })
   }
});
