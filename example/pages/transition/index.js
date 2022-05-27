import Page from '../../common/page';

Page({
  data: {
    name: '',
    show: false
  },
  openTransition(e) {
    const name = e.currentTarget.dataset.item
    this.setData({
      name,
      show: true
    })
    setTimeout(() => {
      this.setData({
        show: false
      })
     }, 1000)
  },
  beforeEnter() {
    console.log('beforeEnter')
  },
  enter() {
    console.log('enter')
  },
  afterEnter() {
    console.log('afterEnter')
  },
  beforeLeave() {
    console.log('beforeLeave')
  },
  leave() {
    console.log('leave')
  },
  afterLeave() {
    console.log('afterLeave')
  }
});