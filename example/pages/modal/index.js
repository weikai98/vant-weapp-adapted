import Page from '../../common/page';

Page({
  data: {
    modalVisiable: false
  },
  clickModal () { 
    this.setData({modalVisiable: false})
  },
  openModal () { 
    this.setData({modalVisiable: true})
  }
});
