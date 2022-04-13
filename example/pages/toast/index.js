import Page from '../../common/page';
import Toast from '../../dist/toast/toast'

Page({
  data: {
  },
  openToast (e) {
    const type = e.currentTarget.dataset.type 
    if (type) {
      Toast({
        type,
        message: '提交成功',
        onClose: () => {
          console.log('执行OnClose函数');
        }
      })
    } else {
      Toast('这是一段提示')
    }
  },
  openIconToast () { 
    Toast({
      type: 'success',
      message: '提交成功',
      duration: 100000,
      icon: "up-circle-fill",
      onClose: () => {
        console.log('执行OnClose函数');
      }
    })
  },
  openMaskToast () { 
    Toast({
      type: 'success',
      message: '提交成功',
      mask: true,
      duration: 100000,
      onClose: () => {
        console.log('执行OnClose函数');
      }
    })
  },
  openPositionToast () { 
    Toast({
      type: 'text',
      message: '提交成功',
      position: 'top'
    })
  }
});
