import index from './index.vue'
import home from './demos/Home'
import demo from './demos/stickyDemo.vue'

export default [
  {
    path:'/',
    component:index,
    children:[{
      path:'/',
      component:home
    },{
      path:'/demo',
      component:demo
    }]
  }
]
