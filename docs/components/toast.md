## 轻提示

1. API 设计

   Toast 组件是一个提示组件。 用于在遮罩上提示。
   当单击关闭按钮时，或在超时后(默认为 5 秒)，toast 将自动关闭。toast 组件用于在操作发生后向用户提供反馈。

   toast 可以配置为出现在应用程序窗口的顶部、中间、底部。
   组件参数

   ```typescript
   type ToastProps = {
     type: String
     position: String
     message: String
     mask: Boolean // 显示遮罩
     isLoading: Boolean // 是否加载中
     icon: String
     zIndex: Number
     duration: Number // 延时多长时间消失
     selector: String // 自定义选择器
     onClose: () => void
   }
   ```

#### API

```javascript
  方法名	                 参数	             返回值	     介绍
  Toast	                  options | message	toast 实例	展示提示
  Toast.loading	          options | message	toast 实例	展示加载提示
  Toast.success	          options | message	toast 实例	展示成功提示
  Toast.fail	            options | message	toast 实例	展示失败提示
  Toast.clear	            clearAll	              void	关闭提示
  Toast.setDefaultOptions	options	                void	修改默认配置，对所有 Toast 生效
  Toast.resetDefaultOptions	-	                    void	重置默认配置，对所有 Toast 生效
```
