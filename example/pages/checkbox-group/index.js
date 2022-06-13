import Page from '../../common/page'

Page({
  data: {
    checkValue: ['check', 'check2']
  },
  onChange(e) {
    const v = e.detail
    this.setData({
      checkValue: v
    })
  }
})
