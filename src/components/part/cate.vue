<template>
	<div>
		<BaseT :data='data' @toDetails='todetail'/>

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
		methods:{
			todetail(id){
				console.log(id)
				// this.$router.push({path:`/details/${id}`,query:{g:5}})
				// if(id){
				// 	axios.get(`https://time2.jglist.com/index.php?r=merchant/shop/shopinfo&auth_name=name&name=1&shop_id=${id}&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402`)
				// }
				this.$router.push({path:`/detailT/${id}`,query:{tyep:"cate"}})
				//跳到 新的详情页  传id
			}
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