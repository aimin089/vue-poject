<template>
	<div id="homeContainer">
    <Header/>
    <Swiper/>
    <Service/>
	</div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Swiper from './Swiper/Swiper'
  import Service from './Service/Service'

  export default {
    name: 'Home',
    components:{
      Header,
      Swiper,
      Service,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
