import { Relation } from './type'

type TrivialInstance = WechatMiniprogram.Component.TrivialInstance

export function useChildren(
  name: string,
  onEffect?: (this: TrivialInstance, target: TrivialInstance) => void
): Relation {
  const path = `../${name}/index`
  return {
    relations: {
      [path]: {
        type: 'descendant',
        linked(this: TrivialInstance, target) {
          // 每次有节点被插入到时执行，target是该节点实例对象，触发在 attached 生命周期之后
          onEffect && onEffect.call(this, target)
        },
        linkChanged(this: TrivialInstance, target) {
          // 每次被移动后执行，触发在 moved 生命周期之后
          onEffect && onEffect.call(this, target)
        },
        unlinked(this: TrivialInstance, target) {
          // 每次被移除时执行，触发在 detached 生命周期之后
          onEffect && onEffect.call(this, target)
        }
      }
    },
    mixin: Behavior({
      created() {
        Object.defineProperty(this, 'children', {
          // 获取这个关系所对应的所有关联节点
          get: () => this.getRelationNodes(path) || []
        })
      }
    })
  }
}

export function useParent(
  name: string,
  onEffect?: (this: TrivialInstance) => void
): Relation {
  const path = `../${name}/index`
  return {
    relations: {
      [path]: {
        type: 'ancestor',
        linked(this: TrivialInstance) {
          // 每次被插入到 [path] 时执行，target是 [path] 节点实例对象，触发在 attached 生命周期之后
          onEffect && onEffect.call(this)
        },
        linkChanged(this: TrivialInstance) {
          // 每次被移动后执行，target是 [path] 节点实例对象，触发在 moved 生命周期之后
          onEffect && onEffect.call(this)
        },
        unlinked(this: TrivialInstance) {
          // 每次被移除时执行，target是 [path] 节点实例对象，触发在 detached 生命周期之后
          onEffect && onEffect.call(this)
        }
      }
    },
    mixin: Behavior({
      created() {
        Object.defineProperty(this, 'parent', {
          // 获取这个关系所对应的所有关联节点
          get: () => this.getRelationNodes(path)[0]
        })
        Object.defineProperty(this, 'index', {
          // @ts-ignore
          get: () => this.parent?.children?.indexOf(this)
        })
      }
    })
  }
}
