// Toast()
// Toast.loading() Toast.success() Toast.fail()
// Toast.close()
// Toast.setOptions(options)
// Toast.resetOptions()

type ToastMessage = string | number
interface ToastOptions { 
  show?: boolean;
  type?: string; // 提示类型
  position?: string; // 提示位置
  message?: ToastMessage; // 提示内容
  mask?: boolean; // 显示遮罩
  icon?: string; // 自定义图标
  zIndex?: number;
  context?: WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance;
  duration?: number; // 延时多长时间消失
  selector?: string; // 自定义选择器
  onOpen?: () => void; 
  onClose?: () => void; // 关闭时的回调
}

type Options = ToastOptions | ToastMessage

const getContext = () => {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

const defaultOptions: ToastOptions = {
  show: true,
  type: 'text',
  zIndex: 1000,
  mask: false,
  message: '',
  duration: 2000,
  position: 'middle',
  selector: '#mu-toast',
}

let currentOptions: ToastOptions = { ...defaultOptions };


const parsetToastMessage = (message):ToastOptions => {
  return typeof message === 'object' && message !== null ? message : { message }
 }

let toastQueue: WechatMiniprogram.Component.TrivialInstance[] = []
function Toast (toastOptions: Options) { 
  const options = {
    ...currentOptions,
    ...parsetToastMessage(toastOptions)
  } as ToastOptions
  // 获取Toast组件
  const page = options.context || getContext()
  const toast = page.selectComponent(options.selector as string)
  // 根据options设置Toast
  if (!toast) {
    console.warn(`未找到 ${options.selector} 节点，请确认 selector 及 context 是否正确`);
    return;
  }
  // 清除方法
  toast.clear = () => { 
    toast.setData({ show: false });

    if (options.onClose) {
      options.onClose();
    }
  }

  toastQueue.push(toast)
  toast.setData(options)
  // 设置唯一的一个定时器, 如果再次触发重新计时
  clearTimeout(toast.timer)

  // 清除
  if (options.duration) { 
    toast.timer = setTimeout(() => { 
      toast.clear()
      toastQueue.filter(v => v !== toast)
    }, options.duration)
  }

  return toast
}

const createToast = (type: string) => (options: Options) => (Toast({ type, ...parsetToastMessage(options) }))
Toast.success = createToast('success')

Toast.fail = createToast('fail')

Toast.loading = createToast('loading')


Toast.clear = () => { 
  toastQueue.forEach(toastItem => {
    toastItem.clear()
  })
  toastQueue = [] 
}

// 设置默认配置项
Toast.setDefaultOptions = (options) => { 
  currentOptions = {...currentOptions, ...options}
}

// 重置默认配置项
Toast.resetDefaultOptions = () => { 
  currentOptions = {...defaultOptions}
}

export default Toast



