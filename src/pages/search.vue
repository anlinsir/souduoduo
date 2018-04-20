<template>
	<div class="warp">
		<Header left='1'></Header>

		<main>
			 <dl v-for='(item,index) in productList' :key='index'>
				<dt><img :src="item.image.img"></dt>
				<dd>
					<p>{{item.title}}</p>
					<p><span>{{item.image.img}}</span><span>1</span></p>
					<p><span>{{item.city}}</span><span>{{item.area}}</span><span>{{item.create_time}}</span></p>
				</dd>
			</dl> 


		</main>

		<Footer></Footer>
	</div>


</template>


<script>
	import axios from 'axios'
	import Header from '../components/header'
	import Footer from '../components/footer'
	export default {
		data(){
			return({
				productList:[]
			})
		},
		components:{
			'Header':Header,
			'Footer':Footer
		},
		mounted(){
			let  val =  this.$route.query.val
			let part = this.$route.query.id
			axios.get(`https://time2.jglist.com/index.php?r=homepage/home/search&search=${val}&page=1&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff`)
				.then((res)=>{
					var a = res.data.data.splice(10)
					this.productList =  res.data.data
				})
		}
	}

</script>


<style lang='scss' scoped>
	.warp{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f3f3f3;
		>header{
			background-color: #fff;

		}
		>main{
			flex: 1;
			overflow: auto;
		}
	}
	
</style>