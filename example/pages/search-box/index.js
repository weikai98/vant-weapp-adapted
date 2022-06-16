import Page from '../../common/page'

Page({
  data: {
    value: '',
    placeholder: '请输入名称'
  },
  onChange(e) {
    const value = e.detail.value
    this.setData({
      value
    })
  }
})
