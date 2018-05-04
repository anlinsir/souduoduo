<template>
	<div class="warp">
		<Header left='1' color='#00d1b2'></Header>

		<main>
			 <dl v-for='(item,index) in productList' :key='index'>
				<dt><img :src="item.image+'200_200.jpg'"></dt>
				<dd>
					<p>{{item.title}}</p>
					<p><span>${{item.price}}</span><span>1</span></p>
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
			let part = this.$route.query.part
			if(!localStorage.text){
				alert('输入关键词')
				this.$router.replace('/index')
			}
			console.log(localStorage.text)
			axios.get(`https://time2.jglist.com/index.php?r=homepage/home/search&search=${localStorage.text}&page=1&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff`)
				.then((res)=>{
					var a = res.data.data.splice(10)
					console.log(res.data.data)
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
			>dl{ 
				width: 100%;
				hyphens: 28.53vw;
				padding: 4vw 4vw;
				box-sizing: border-box;
				display: flex;
				border-top: 1px solid #eeeeee;
				font-size: 3.73vw;
				background-color: #fff;
				>dt{
					width: 20.53vw;
					height: 20.53vw;
					margin-right: 2.93vw;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				>dd{
					width: 70vw;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space:nowrap
					:nth-child(1){}
					:nth-child(2){
						:nth-child(1){
							color: #f15a4a;
							font-size: 3.46vw;
						}
						:nth-child(2){
							float: right;
						}

					}
					:nth-child(3){
						font-size: 2.13vw;
						color: #999999;
						:nth-child(1){
							margin-right: 1vw;
						}
						:nth-child(2){}
						:nth-child(3){
							float: right;
						}

					}


				}
			}
		}
	}
	
</style>