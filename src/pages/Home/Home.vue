<template>
	<div id="homeContainer">
    <Header/>
    <Swiper/>
	</div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Swiper from './components/Swiper'

  

  export default {
    name: 'Home',
    components:{
      Header,
      Swiper
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
