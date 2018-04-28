<template>
	<div>
		<BaseT :data='data' @toDetails='todetail'></BaseT>

	</div>

</template>

<script>
	import BaseT from './base2'
	import axios from 'axios'
	export default {
		components:{
			BaseT			
		}
		,
		data(){
			return({
				data:[]
			})
		}
		,
		methods:{
			todetail(id){
				console.log(id)
				// this.$router.push({path:`/details/${id}`,query:{g:5}})
				// if(id){
				// 	axios.get(`https://time2.jglist.com/index.php?r=merchant/shop/shopinfo&auth_name=name&name=1&shop_id=${id}&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402`)
				// }
				this.$router.push({path:`/detailT/${id}`,query:{tyep:"mer"}})
				//跳到 新的详情页  传id
			}
		},
		created(){
			// https://time2.jglist.com/index.php?r=merchant/shop/shopinfo&auth_name=name&name=1&shop_id=8663&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402  /商家服务的链接  改id的值   新开一个details页面
			
			axios.get('https://time2.jglist.com/index.php?r=merchant/shop/list&auth_name=id&category_child=0&category_parent=0&grand_id=5&id=1&lat=32&lng=123&tx=3f556f66353c5945a3633ae209a3e0ff')//page
				.then(res=>{
					this.data =  res.data.data
					console.log(this.data)
				})
		}

	}


</script>


<style scoped lang="scss"></style>