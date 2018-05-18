<template>
	<div>
		
		<Base  @detali='detali' @next='next' :data='data'></Base>
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
			localStorage.pages4 = 1
			/*	if(!localStorage.dataG4){
					this.data = JSON.parse(localStorage.dataG4)
					return
				}*/

			axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&city_id=${localStorage.UsedCity ? localStorage.UsedCity : 0 }&level=${localStorage.UsedAdd ? localStorage.UsedAdd : 0}&cate_id=${localStorage.UsedCate ? localStorage.UsedCate : 0}&grand_id=4&source=${localStorage.UsedRole ? localStorage.UsedRole : 0}&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&type=${localStorage.UsedTime ? localStorage.UsedTime : 3 }`)
			.then(res=>{
				this.data = res.data.data
				localStorage.dataG4 = JSON.stringify(res.data.data)


			})
		},
		components:{
			Base
		},
		methods:{
			detali(id){
				this.$router.push({path:`/details/${id}`,query:{g:4}})					
				
			},
				next(pages){
				
				localStorage.pages4 = Number(localStorage.pages4) + 1
				axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=4&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&page=${localStorage.pages4}&type=${localStorage.UsedTime ? localStorage.UsedTime : 3 }`)
				.then(res=>{
					console.log(res.data.data)
					for(let i in res.data.data){
						this.data.push(res.data.data[i])
					}


				})
			}
		}
	}
</script>


<style scoped lang="scss"></style>