## 单元格设计

1. API 设计

   Cell 组件是一个基础布局组件。
   [ 【【图标】【标题】】 【【内容】【图标】】 ]

   1. 一般情况下，左侧为标题，右侧为其对应的值
   2. 左侧、右侧都可以使用插槽自定义内容

   组件参数

   ```typescript
   type CellProps = {
     title: string
     value: string
     describe: string
     leftIcon: string
     rightIcon: string
     isLink: Boolean
     tap: (e: Event) => void
   }

   type CellSlot = {
     useTitle: Node
     useValue: Node
   }
   ```

2.
