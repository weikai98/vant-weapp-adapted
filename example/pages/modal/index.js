import Page from '../../common/page';

Page({
  data: {
    modalVisiable: false
  },
  clickMask () { 
    this.setData({modalVisiable: false})
  },
  openMask () { 
    this.setData({modalVisiable: true})
  }
});
