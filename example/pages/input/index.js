import Page from '../../common/page'

Page({
  data: {
    value: ''
  },
  onInputChange(e) {
    const value = e.detail.value
    this.setData({
      value
    })
  }
})
