import Page from '../../common/page';

Page({
  data: {
    caption: 'A_1',
    options: Array.from({length: 3}, (v, i) => ({ label: `A_${i}`, value: i})),
    caption2: 'B_1',
    options2: Array.from({length: 3}, (v, i) => ({ label: `B_${i}`, value: i})),
  },
  onChange (e) {
    const { value } = e.detail
    const { caption, options } =this.data
    let newCaption = caption
    options.forEach(v => {
      if (v.value === value) {
        v.check = !v.check
        newCaption = v.label
      } else { 
        v.check = false
      }
    })
    this.setData({
      options: this.data.options,
      caption: newCaption
    })
   }
});
