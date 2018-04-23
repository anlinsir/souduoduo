<template>
	<div>
		
		<Base :data='data'></Base>
	</div>

</template>


<script>
	import Base from './base'
	import axios from 'axios'

	export default {
		data(){
			return({
				data:[]
			})
		},
		created(){
			axios.get('https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=4&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
			.then(res=>{
				console.log(res.data.data)
				this.data = res.data.data	

			})
		},
		components:{
			Base
		},
	}
</script>


<style scoped lang="scss"></style>