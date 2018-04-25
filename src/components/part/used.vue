<template>
	
	<div>
		
			<Base @detali='detali' @next='next' :data='data'></Base>
		
	</div>

</template>


<script>
	import Base from './base'
	import axios from 'axios'
	export default {
		data(){
			return({
				data:[],
				pages:0
			})
		},
		components:{
			'Base':Base
		},
		methods:{
			detali(id){	
				console.log(id)
					this.$router.push({path:`/details/${id}`,query:{g:1}})		
			},
			next(pages){
				
				localStorage.pages = Number(localStorage.pages1) + 1
				console.log(localStorage.pages1)
				axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=1&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&page=${localStorage.pages1}`)
				.then(res=>{
					for(let i in res.data.data){
						this.data.push(res.data.data[i])
					}


				})
			}
		},
		created(){
			//加载 数据 传到子组件
		//通过路由判断 加载什么数据
			localStorage.pages = 1
		// https://time2.jglist.com/index.php?r=magor/five/details&auth_name=name&grand_id=1&id=${}&name=1&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402
				if(localStorage.dataG1){
					this.data = JSON.parse(localStorage.dataG1)
					return
				}
				axios.get('https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=1&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&page=1')
				.then(res=>{
					this.data = res.data.data
					localStorage.dataG1 = JSON.stringify(res.data.data)


				})
			
	}
}
</script>


<style lang="scss" scoped>
	

</style>