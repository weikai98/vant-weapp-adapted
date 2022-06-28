import Page from '../../common/page';

Page({
  data: {
    columns: Array.from({ length: 5 }, (v, i) => ({label: `阴${i}`, value: `${i}` })),
    columns1: Array.from({ length: 2 }, (v, i) => ({label: `阴${i}`, value: `${i}`, children: Array.from({ length: 5 }, (v, j) => ({label: `阴${i}_阳${j}`, value:`${i}-${j}`})) })),
    columns2: Array.from({ length: 2 }, (v, i) => ({ check: i === 1, label: `阴${i}`, value: `${i}`, children: Array.from({ length: 5 }, (v, j) => ({ label: `阴${i}_阳${j}`, value: `${i}-${j}`, check: j === 4 })) }))  
  },
  onChange (e) {
    console.log('change', e.detail)
   },
  onConfirm (e) { 
    console.log('confirm', e.detail)
  },
  onCancel (e) { 
    console.log('cancel', e.detail)
  },
});
