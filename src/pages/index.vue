<template>
	<div class="Warp">
		<Header/>
		<div class="warp">
			<router-view />
		</div>
		<Footer />
			
	</div>

</template>


<script>
	import Header from '../components/header'
	import Footer from '../components/footer'

	export default {
		components:{
			Header,
			Footer
		}

	}
</script>



<style lang="scss" scoped>
	.Warp{
		width: 100%;
		min-height: 100%;
		.warp{
			width: 1200px;
			min-height: 100px;

			margin:auto;

			
		}
	}
</style>