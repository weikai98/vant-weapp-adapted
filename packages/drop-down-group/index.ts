import { VantComponent } from '../common/components'
import { useChildren } from '../common/relation'

VantComponent({
  relation: useChildren('drop-down', function (this, target) {
    // this.updateChild(target)
  })
})
