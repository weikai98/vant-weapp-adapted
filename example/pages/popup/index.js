import Page from '../../common/page';

Page({
  data: {
    popupVisiable: false,
    closeablePopupVisiable: false,
    roundPopupVisiable: false,
    position: 'center'
  },
  showPopup ({position}) { 
    this.setData({ popupVisiable: true, position })
  },
  closePopup () {
    this.setData({
      popupVisiable: false,
      closeablePopupVisiable: false,
      roundPopupVisiable: false,
    })
   },
  clickModal () { 
    this.setData({ popupVisiable: false })
  },
  showCenter () {
    this.showPopup({ position: 'center' })
  },
  showTop () {
    this.showPopup({ position: 'top' })
  },
  showBottom () {
    this.showPopup({ position: 'bottom' })
  },
  showLeft () {
    this.showPopup({ position: 'left' })
  },
  showRight () {
    this.showPopup({ position: 'right' })
  },
  showCloseable () {
    this.setData({ closeablePopupVisiable: true })
   },
  showRound () { 
    this.setData({ roundPopupVisiable: true })
  },
});
