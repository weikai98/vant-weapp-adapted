## 弹出框

### 设计

1. API 设计

   Popup 是一个基础布局组件

   <!-- Popup-header 用于设置 title 及其按钮 -->

   Popup-body 用于内容呈现

接口参数

```typescript
type PropType = {
  show: Boolean // 显示隐藏
  zIndex: Number // 层级
  position: String // bottom top left right center
  round: Boolean // 圆角
  mask: Boolean // 显示遮罩
  closeOnClickMask: Boolean // 点击遮罩是否关闭弹窗
  closeable: Boolean // 显示关闭按钮
  closeIcon: String // 自定义关闭图标
  lockScroll: Boolean // 锁定背景滚动

  clickMask: () => void // 点击遮罩

  beforeClose: () => void // 关闭前触发
  close: () => void // 关闭时触发
  afterClose: () => void // 关闭后触发

  beforeOpen: () => void // 打开前触发
  open: () => void // 打开时触发
  afterOpen: () => void // 打开后触发
}
```

2.
