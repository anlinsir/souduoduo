<template>
	
	<div>
		<Base @detali='detali' :data='data'></Base>

	</div>
</template>


<script>
	import Base from './base'
	import axios from 'axios'
	export default {
		methods:{
			detali(id){
				console.log(id)
				console.log('dsds')
			}
		}
		,
		components:{
			Base
		},
		data(){
			return({
				data:[]
			})
		},
		created(){
			axios.get('https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=2&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&page=1')
					.then( res => {
						console.log(res.data.data)
						this.data = res.data.data
					})
		}
		// https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=4&id=1&tx=3f556f66353c5945a3633ae209a3e0ff
	}
</script>


<style lang="scss" scoped></style>