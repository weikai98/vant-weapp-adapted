import { VantComponentOptions } from "./type"

function mapKeys (
  source: Record<string, any>,
  target: Record<string, any>,
  map: Record<string, any>
) { 
  Object.keys(map).forEach(v => { 
    if (source[v]) {
      target[map[v]] = source[v] 
    }
  })
}

export const basic = Behavior({
  methods: {
    $emit(
      name: string,
      detail?: Record<string, unknown>,
      options?: WechatMiniprogram.Component.TriggerEventOption
    ) {
      this.triggerEvent(name, detail, options);
    },

    set(data: Record<string, unknown>) {
      this.setData(data);

      return new Promise((resolve) => wx.nextTick(resolve));
    },
  },
});

function VantComponent<
  Data extends WechatMiniprogram.Component.DataOption,
  Props extends WechatMiniprogram.Component.PropertyOption,
  Methods extends WechatMiniprogram.Component.MethodOption
  > (vantOptions: VantComponentOptions<Data, Props, Methods>) { 
  
  const options: WechatMiniprogram.Component.Options<Data, Props, Methods> = {}
  
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses',
  })
  // add default externalClasses
  // 组件接受的外部样式类
  options.externalClasses = options.externalClasses || []
  options.externalClasses.push('custom-class')

  // add default behaviors
  options.behaviors = options.behaviors || [];
  // this.$emit('事件名称', 参数, options 配置项) 
  // this.set({ name: 'zs' })  
  options.behaviors.push(basic);

  // add relations
  // 组件间关系定义
  const { relation } = vantOptions;
  if (relation) {
    options.relations = relation.relations;
    options.behaviors.push(relation.mixin);
  }

  // map field to form-field behavior 
  // 类似于mixins和traits的组件间代码复用机制
  if (vantOptions.field) {
    // 为自定义组件添加可以表单控件的行为， form组件可以识别这些自定义组件，并在submit事件中返回组件的字段名及其对应字段值
    options.behaviors.push('wx://form-field');
  }

  // add default options
  options.options = {
    multipleSlots: true, // 使用多插槽
    addGlobalClass: true,
  };

  Component(options);

}

export { 
  VantComponent
}