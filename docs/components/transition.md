## transition

1. Vue Transition 组件作为单个元素/组件的过渡效果。将其过渡效果应用到其包裹的组件上，而不会渲染额外的 DOM

### 基础功能

1. 创建一个容器，根据不同时机的钩子函数添加、删除样式类
2. 样式类 enter-class enter-active-class enter-to-class
   leave-class leave-active-class leave-to-class
3. 钩子函数
   beforeEnter
   beforeLeave
   enter
   leave
   afterLeave
   afterEnter
4. 通过对容器 show 属性控制节点显示隐藏，状态切换

### 进阶

1. 不创建 DOM 元素
2. 获取子元素，判断是否是一个元素，在渲染阶段为子节点挂载 transition 属性，表示一个被 Transition 组件包裹的节点
3. 在 path 阶段 在子元素上 enter、leave 时机执行不同的钩子函数、添加、删除不同的样式类
4. 在被包裹的子节点上使用 v-if v-show 进行状态的切换

API

```typescript
type TransitionProps = {
  name: string
  show: boolean
  duration: number
}
```

### Events

| 事件名            | 说明       | 参数 |
| ----------------- | ---------- | ---- |
| bind:before-enter | 进入前触发 | -    |
| bind:enter        | 进入中触发 | -    |
| bind:after-enter  | 进入后触发 | -    |
| bind:before-leave | 离开前触发 | -    |
| bind:leave        | 离开中触发 | -    |
| bind:after-leave  | 离开后触发 | -    |

### 外部样式类

| 类名               | 说明                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| custom-class       | 根节点样式类                                                                                                                                                        |
| enter-class        | 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。                                                                                        |
| enter-active-class | 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。       |
| enter-to-class     | 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。                                                         |
| leave-class        | 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。                                                                                                  |
| leave-active-class | 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 |
| leave-to-class     | 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除。                                                     |

### 动画类型

| Name 类型   | Value    |
| ----------- | -------- |
| fade        | 淡入     |
| fade-up     | 上滑淡入 |
| fade-dowm   | 下滑淡入 |
| fade-left   | 左滑淡入 |
| fade-right  | 右滑淡入 |
| slide-up    | 上滑进入 |
| slide-down  | 下滑进入 |
| slide-left  | 左滑进入 |
| slide-right | 右滑进入 |
