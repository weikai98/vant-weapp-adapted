# 开关

## 介绍

## 代码演示

## 设计 (API)

#### Props

| 参数          | 说明           | 类型                    | 默认值 |
| ------------- | -------------- | ----------------------- | ------ |
| value         | 开关打开状态   | boolean、string、number | false  |
| disabled      | 是否禁用       | boolean                 | false  |
| activeText    | 打开时的文字   | string                  | --     |
| inActiveText  | 关闭时的文字   | string                  | --     |
| activeValue   | 打开时的绑定值 | boolean、string、number | true   |
| inActiveValue | 关闭时的绑定值 | boolean、string、number | false  |

#### Events

#### Radio Events

| 事件名      | 说明               | 回调参数                     |
| ----------- | ------------------ | ---------------------------- |
| bind:change | 打开状态变化时触发 | event.detail = 新的 value 值 |
