<template>
	
	<div>
		<Base @detali='detali' @next='next' :data='data'></Base>

	</div>
</template>


<script>
	import Base from './base'
	import axios from 'axios'
	export default {
		methods:{
			detali(id){
				console.log(id)
				this.$router.push({path:`/details/${id}`,query:{g:2}})					

			},
			next(pages){
				
				localStorage.pages2 = Number(localStorage.pages2) + 1
				console.log(localStorage.pages2)
				axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=${localStorage.UsedCate ? localStorage.UsedCate : 0 }&grand_id=2&id=1&source=${localStorage.UsedRole ? localStorage.UsedRole : 0}&city_id=${localStorage.UsedCity ? localStorage.UsedCity  : 0}&level=${localStorage.UsedCity ? localStorage.UsedAdd : ''}&tx=3f556f66353c5945a3633ae209a3e0ff&page=${localStorage.pages2}&type=${localStorage.UsedTime ? localStorage.UsedTime : 3 }`)
				.then(res=>{
					for(let i in res.data.data){
						this.data.push(res.data.data[i])
					}


				})
			}
		}
		,
		components:{
			Base
		},
		data(){
			return({
				data:[],
			})
		},
		created(){
			localStorage.pages2 = 1

				if(localStorage.dataG2 && localStorage.UsedRole == 0){
					this.data = JSON.parse(localStorage.dataG2)
					return
				}
			axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=${localStorage.UsedCate ? localStorage.UsedCate : 0 }&grand_id=2&id=1&source=${localStorage.UsedRole ? localStorage.UsedRole : 0}&city_id=${localStorage.UsedCity ? localStorage.UsedCity  : 0}&level=${localStorage.UsedCity ? localStorage.UsedAdd : ''}&tx=3f556f66353c5945a3633ae209a3e0ff&page=1&type=${localStorage.UsedTime ? localStorage.UsedTime : 3 }`)
					.then( res => {
						if(res.data.data.length == 0){
							alert('没有了')
							this.data =[{title:'没有了'}]
							return
						}
						this.data = res.data.data
						localStorage.dataG2 = JSON.stringify(res.data.data)
					})
		}
		// https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=4&id=1&tx=3f556f66353c5945a3633ae209a3e0ff
	}
</script>


<style lang="scss" scoped></style>