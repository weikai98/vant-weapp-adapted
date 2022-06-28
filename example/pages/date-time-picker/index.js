import Page from '../../common/page';

Page({
  data: {
    currentDate: '2022-6-22',
    minDate: '2000-1-2',
    maxDate: '2030-5-1'
  },
  onChange (e) {
    console.log('change', e.detail)
   },
  onConfirm (e) { 
    debugger
    console.log('confirm', e.detail)
  },
  onCancel (e) { 
    console.log('cancel', e.detail)
  },
});
