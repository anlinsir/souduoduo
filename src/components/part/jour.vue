<template>
	
	<div>
		
		<BaseT :data='data' @next='next' :textNext='nt'  @toDetails='todetail' />
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
				data:[],
				flag:1,
				nt:"next"
			})
		},
		methods:{
			next(){
				localStorage.Jourpages = Number(localStorage.Jourpages) + 1
				console.log(localStorage.Jourpages)
				axios.get(`https://time2.jglist.com/index.php?r=newtravel/travel/list&auth_name=id&category_child=0&grand_id=8&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&page=${localStorage.Jourpages}`)
				.then(res=>{
					if(!res.data.data.length){this.nt == '在怎么找也没有了'}
					for(let i in res.data.data){
						this.data.push(res.data.data[i])
					}


				})
			},
			todetail(id){
			
				
					this.$router.push({path:`/detailT/${id}`,query:{tyep:"jour"}})

				
			
			}
		},
		created(){
			localStorage.Jourpages  = 1 
				if(localStorage.dataJour){
					this.data = JSON.parse(localStorage.dataJour)
					return
				}
			axios.get('https://time2.jglist.com/index.php?r=newtravel/travel/list&auth_name=id&category_child=0&grand_id=8&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					console.log(res.data.data)
					this.data = res.data.data
					localStorage.dataJour = JSON.stringify(res.data.data)

				})
		}
	}

</script>



<style scoped lang="scss"></style>