<template>
  <div id="footerContainer">
    <ul class="footerNav">
      <li class="item" :class="{active: $route.path === '/home'}" @click="$router.replace('/')">
        <i class="icon home" :class="$route.path === '/home' ? 'homeLight' : 'home'"></i>
        <span class="text">首页</span>
      </li>
      <li class="item" :class="{active: $route.path === '/category'}" @click="$router.replace('/category')">
        <i class="icon category" :class="$route.path === '/category' ? 'categoryLight' : 'category'"></i>
        <span class="text">分类</span>
      </li>
      <li class="item" :class="{active: $route.path === '/things'}" @click="$router.replace('/things')">
        <i class="icon things" :class="$route.path === '/things' ? 'thingsLight' : 'things'"></i>
        <span class="text">识物</span>
      </li>
      <li class="item" :class="{active: $route.path === '/shopCart'}" @click="$router.replace('/shopCart')">
        <i class="icon shopCart" :class="$route.path === '/shopCart' ? 'shopCartLight' : 'shopCart'"></i>
        <span class="text">购物车</span>
      </li>
      <li class="item" :class="{active: $route.path === '/personal'}" @click="$router.replace('/personal')">
        <i class="icon personal" :class="$route.path === '/personal' ? 'personalLight' : 'personal'"></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FooterNav'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  /*底部导航*/
  #footerContainer
    position fixed
    left 0
    bottom: 0
    width 100%
    height: 100px
    background-color: $footerBgc
    border-top: 0.75px solid $borderBgc
    z-index 2
    .footerNav
      width 100%
      height: 100%
      display flex
      align-items center
      .item
        flex 1
        text-align center
        &.active
          color #b4282d
        .icon
          display inline-block
          margin-bottom 15px
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
        .home
          background-position 0 -250px
        .homeLight
          background-position 0 -200px
        .category
          background-position 0 -150px
        .categoryLight
          background-position 0 -100px
        .things
          background-position 0 -350px
        .thingsLight
          background-position 0 -300px
        .shopCart
          background-position 0 -50px
        .shopCartLight
          background-position 0 0
        .personal
          background-position 0 -450px
        .personalLight
          background-position 0 -400px
        .text
          display block
          font-size 24px
          margin-top -15px
</style>
