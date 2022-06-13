# 单选框

## 介绍

## 代码演示

## 设计 (API)

#### Radio Props

| 参数     | 说明           | 类型    | 默认值 |
| -------- | -------------- | ------- | ------ |
| name     | 原生 name 属性 | string  | --     |
| value    | 是否为选中状态 | boolean | false  |
| disabled | 是否为禁用状态 | boolean | false  |
| border   | 是否显示边框   | boolean | false  |
| label    | 单选框对应的值 | string  | ---    |

#### Radio Events

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |

#### Radio Group Props

| 参数      | 说明                            | 类型    | 默认值     |
| --------- | ------------------------------- | ------- | ---------- |
| value     | 绑定 checkbox 值                | array   | --         |
| disabled  | 是否禁用所有复选框              | boolean | false      |
| direction | 排列方向 (horizontal、vertical) | string  | horizontal |

#### Radio Group Events

| 事件名      | 说明                     | 回调参数     |
| ----------- | ------------------------ | ------------ |
| bind:change | 当绑定值变化时触发的事件 | 当前组件的值 |
