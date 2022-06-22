import Page from '../../common/page';

Page({
  data: {
    checked: false
  },
  onChange (e) {
    this.setData({
      checked: e.detail
    })
   }
});
