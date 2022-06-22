# 输入框

## 介绍

## 代码演示

## 设计 (API)

#### Input Props

[1]: https://developers.weixin.qq.com/miniprogram/dev/component/input.html

| 参数              | 说明                                                        | 类型           | 默认值 |
| ----------------- | ----------------------------------------------------------- | -------------- | ------ |
| type              | 类型(text、textarea 和其他原生 input 的 type 值)            | string         | text   |
| value             | 绑定值                                                      | string、number | -      |
| minlength         | 最小长度                                                    | number         | -      |
| maxlength         | 最大长度 （-1 为不限制最大长度）                            | number         | 140    |
| placeholder       | 输入框占位文本                                              | string         | -      |
| placeholder-style | 输入框占位样式                                              | string         | -      |
| placeholder-class | 输入框占位样式类                                            | string         | -      |
| cursor-spacing    | 输入框聚焦时底部与键盘的距离                                | number         | 0      |
| clearable         | 是否可清空                                                  | boolean        | -      |
| disabled          | 禁用                                                        | boolean        | -      |
| left-icon         | 输入框左侧图标                                              | string         | -      |
| right-icon        | 输入框右侧图标                                              | string         | -      |
| focus             | 获取焦点                                                    | boolean        | false  |
| confirm-type      | 设置键盘右下角按钮文字,[详见文档][1]                        | string         | done   |
| always-embed      | 强制 input 处于同层状态,focus 会切换到非同层状态(IOS 生效)  | boolean        | false  |
| confirm-hold      | 点击键盘右下角按钮时是否保持键盘不收起                      | boolean        | false  |
| cursor            | 指定 focus 时的光标位置                                     | number         |        |
| selection-start   | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用   | number         | -1     |
| selection-end     | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | number         | -1     |
| adjust-position   | 键盘弹起时，是否自动上推页面                                | boolean        | true   |
| hold-keyboard     | focus 时，点击页面的时候不收起键盘                          | boolean        | false  |

#### Input Events

| 事件名                    | 说明                       | 回调参数                                              |
| ------------------------- | -------------------------- | ----------------------------------------------------- |
| bind:input                | 键盘输入时触发             | event.detail = {value,cursor,keyCode}, keyCode 为键值 |
| bind:change               | 内容变化时触发             | event.detail = {value,cursor,keyCode}, keyCode 为键值 |
| bind:focus                | 输入框聚焦时触发           | event.detail = {value,height} height 为键盘高度       |
| bind:blur                 | 输入框失焦时触发           | event.detail = {value,encryptedValue, encryptError}   |
| bind:confirm              | 点击完成按钮时触发         | event.detail = {value}                                |
| bind:keyboardheightchange | 键盘高度发生变化的时候触发 | event.detail = {height: height, duration: duration}   |
