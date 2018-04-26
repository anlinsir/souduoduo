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
			}
		},
		created(){
			
			axios.get('https://time2.jglist.com/index.php?r=merchant/shop/list&auth_name=id&category_child=0&category_parent=0&grand_id=5&id=1&lat=32&lng=123&tx=3f556f66353c5945a3633ae209a3e0ff')//page
				.then(res=>{
					this.data =  res.data.data
					console.log(this.data)
				})
		}

	}


</script>


<style scoped lang="scss"></style>