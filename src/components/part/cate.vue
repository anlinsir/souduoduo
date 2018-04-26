<template>
	<div>
		<BaseT :data='data'/>

	</div>


</template>


<script>
	import BaseT from './base2'
	import axios from 'axios'
	export default {
		components:{
			BaseT
		},
		data(){
			return({
				data:[]
			})
		},
		created(){
			axios.get('https://time2.jglist.com/index.php?r=delicacy/food/list&auth_name=id&grand_id=6&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					console.log(res.data.data)
					this.data = res.data.data
				})
		}

	}

</script>


<style scoped lang="scss">
	
</style>