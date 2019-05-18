/**
 * 所有路由配置对象的数组
 */
import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Things from '../pages/Things/Things'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/things',
    component:Things
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'',
    redirect:'/home'
  }
]
