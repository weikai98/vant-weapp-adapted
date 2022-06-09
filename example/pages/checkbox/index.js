import Page from '../../common/page';

Page({
  data: {
    check: false,
    check1: false
  },
  onTap (e) {
    const key = e.currentTarget.dataset.check
    const v = e.detail
    this.setData({
      [key]: v
    })
   }
});
