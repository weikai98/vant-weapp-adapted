# 下拉菜单

## 介绍

## 代码演示

## 设计 (API)

#### drop-down Props

| 参数       | 说明             | 类型    | 默认值           |
| ---------- | ---------------- | ------- | ---------------- |
| options    | 选项数组         | array   | []               |
| caption    | 标题             | string  | 当前选项选中文字 |
| diretion   | 方向             | string  | down             |
| disabled   | 是否禁用         | boolean | false            |
| multiple   | 是否多选         | boolean | false            |
| popupStyle | 下拉菜单面板样式 | string  | ——               |

#### drop-down Events

| 事件名 | 说明             | 回调参数                 |
| ------ | ---------------- | ------------------------ |
| change | 选项被改变触发时 | {value, item, multiple } |
