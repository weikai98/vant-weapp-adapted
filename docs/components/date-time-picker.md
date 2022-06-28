# 时间选择器

## 介绍

## 代码演示

## 设计 (API)

#### date-time-picker Props

| 参数                | 说明               | 类型    | 默认值              |
| ------------------- | ------------------ | ------- | ------------------- |
| value               | 默认时间           | string  | new Date() 当前日期 |
| title               | 顶部栏标题         | string  | --                  |
| min-date            | 可选最小时间       | string  | 十年前              |
| max-date            | 可选最大时间       | string  | 十年后              |
| showToolbar         | 显示顶部栏         | boolean | true                |
| confirm-button-text | 顶部栏确认按钮文字 | string  | 确认                |
| cancel-button-text  | 顶部栏取消按钮文字 | string  | 取消                |
| visible-item-count  | 可见的选项个数     | number  | 6                   |

#### date-time-picker Events

| 事件名       | 说明           | 回调参数                    |
| ------------ | -------------- | --------------------------- |
| bind:change  | 选项改变时触发 | event.detail = 所选当前日期 |
| bind:cancel  | 取消时触发     | event.detail = 所选当前日期 |
| bind:confirm | 提交时触发     | event.detail = 所选当前日期 |
