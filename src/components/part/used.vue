<template>
	
	<div>
		
			<Base @detali='detali' :data='data'></Base>
		
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
		components:{
			'Base':Base
		},
		methods:{
			detali(id){	
				console.log(id)
			}
		},
		created(){
			//加载 数据 传到子组件
		//通过路由判断 加载什么数据
			
		https://time2.jglist.com/index.php?r=magor/five/details&auth_name=name&grand_id=1&id=136835&name=1&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402
				axios.get('https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=1&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					this.data = res.data.data


				})
			
	}
}
</script>


<style lang="scss" scoped>
	

</style>