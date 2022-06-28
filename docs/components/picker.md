# 选择器

## 介绍

## 代码演示

## 设计 (API)

#### Picker Props

[1]: 单级 [{label,value}] 多级[{label,value,id,parentId}]

<!-- [2]: 单级 [value1, value2] -->

| 参数                | 说明                                     | 类型    | 默认值 |
| ------------------- | ---------------------------------------- | ------- | ------ |
| columns             | 列数据，[]                               | array   | []     |
| fields              | 指定选项的值、标签为选项对象的某个属性值 | object  | --     |
| showToolbar         | 显示顶部栏                               | boolean | true   |
| title               | 顶部栏标题                               | string  | --     |
| confirm-button-text | 顶部栏确认按钮文字                       | string  | 确认   |
| cancel-button-text  | 顶部栏取消按钮文字                       | string  | 取消   |
| visible-item-count  | 可见的选项个数                           | number  | 6      |

#### Picker Events

[1]: 单列：选中值，选中值对应的索引 多列：所有列选中值，所有列选中值对应的索引

| 事件名       | 说明           | 回调参数           |
| ------------ | -------------- | ------------------ |
| bind:change  | 选项改变时触发 | event.detail = [1] |
| bind:cancel  | 取消时触发     | event.detail = [1] |
| bind:confirm | 提交时触发     | event.detail = [1] |
