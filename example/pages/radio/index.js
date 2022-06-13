import Page from '../../common/page'

Page({
  data: {
    check: 'check1'
  },
  onTap(e) {
    const v = e.detail
    this.setData({
      check: v
    })
  }
})
