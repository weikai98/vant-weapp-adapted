# 搜索框

## 介绍

## 代码演示

## 设计 (API)

#### Props

| 参数        | 说明       | 类型    | 默认值 |
| ----------- | ---------- | ------- | ------ |
| value       | 值         | string  | --     |
| round       | 是否圆角   | boolean | true   |
| placeholder | 默认填入值 | string  | --     |

#### Events

#### Radio Events

| 事件名      | 说明             | 回调参数                                              |
| ----------- | ---------------- | ----------------------------------------------------- |
| bind:change | 内容变化时触发   | event.detail = {value,cursor,keyCode}, keyCode 为键值 |
| bind:focus  | 输入框聚焦时触发 | event.detail = {value,height} height 为键盘高度       |
| bind:blur   | 输入框失焦时触发 | event.detail = {value,encryptedValue, encryptError}   |
