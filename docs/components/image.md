# 图片

## 介绍

## 代码演示

## 设计 (API)

1. 图片填充方式

2. 图片加载样式 、图片懒加载 （加载处理）
3. 图片预览 （预览处理）

4. 图片报错样式 、加载错误回调 （容错处理）

```typescript
interface PreviewType {
  visible?: boolean
  onVisibleChange?: (visible, prevVisible) => void
  src?: string
  mask?: boolean
  current?: number
  // getContainer?: string | HTMLElement | (() => HTMLElement);
  // maskClassName?: string;
  // countRender?: (current: number, total: number) => string
}
type ImageProps = {
  src: string
  alt: string
  width: string | number
  height: string | number
  fit: string // 填充方式
  lazy: boolean // 是否开启懒加载
  preview: boolean | PreviewType // 开启图片预览功能
  onError: () => void
}

图片填充模式
名称	      |   含义
contain	    |   保持宽高缩放图片，使图片的长边能完全显示出来
cover	      |   保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
fill	      |   拉伸图片，使图片填满元素
widthFix	  |   缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
heightFix	  |   缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
none	      |   保持图片原有尺寸

```
