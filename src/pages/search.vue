<template>
	<div class="warp">
		
		<Header left='2' color='#00d1b2' @backk='backk'  @getVal='getVal'></Header>

		<main>
			 <dl @click='down(item.id)' v-for='(item,index) in productList' :key='index'>
				<dt><img :src="item.image+'200_200.jpg'"></dt>
				<dd>
					<p>{{item.title}}</p>
					<p style="marginBottom: 5vw;marginTop:1vw; "><span>${{item.price}}</span><span id='role'

					 :style="{color: item.role == 1 ? '#00d1b2' : item.role == 2 ? '#fb6b5c' :'#ffa84b'}">


					{{item.role ? item.role == 1 ? '个人' : item.role == 2 ? '商家' :  '经纪人' : '' }}</span></p>
					<p><span>{{item.city}}</span><span>{{item.area}}</span><span>{{item.create_time}}</span></p>
				</dd>
			</dl> 

<div v-show='sets' id="set">
				<div class="in">
					<span class="o"></span>
					<span class="t"></span>
					<span class="e"></span>
					<i id="texxxt">加载中 ...</i>
				</div>
	</div>


	
	
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
				productList:[],
				sets:false,
				part:null,
				val:null

			})
		},
		components:{
			'Header':Header,
			'Footer':Footer
		},
		methods:{
			backk(val){


			},
			getVal(val){
				this.val =  val
				console.log(this.val,this.$route.query.part)
				console.log(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=${this.$route.query.part}&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&search=${this.val}&page=1`)
				axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=${this.$route.query.part}&id=1&tx=3f556f66353c5945a3633ae209a3e0ff&search=${this.val}&page=1`)

					.then((res)=>{
						console.log(res.data.data)
						this.productList = res.data.data
					})
			},
			down(id){
				var part = this.$route.query.part
				console.log(part)
				
					if(part == 1){
						this.$router.push({path:`/details/${id}`,query:{g:1}})
					}else if(part == 2){
						this.$router.push({path:`/details/${id}`,query:{g:2}})						
					}else if(part == 3){
						this.$router.push({path:`/details/${id}`,query:{g:3}})
					}
					
						
						
				
			}
			,
			

			otherShow(){
				this.showw = false
			},
			getPart(e){



			// 	this.showw = false
			// 	this.sets = true
				

			// 	this.part = Number(e.target.dataset.id) + 1
			// 	localStorage.Part = this.part 
			// 	if(!localStorage.text && localStorage.text != this.text){
			// 			alert('请输入关键词')
			// 			return
			// 		}
			// 	let  val =  this.$route.query.val
			// let part = this.$route.query.part
			// if(!localStorage.text){
			// 	alert('输入关键词')
			// 	this.$router.replace('/index')
			// }
			// console.log(localStorage.text)
			// axios.get(`https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&grand_id=${this.$route.query.part}&id=1&search=${this.$route.query.val}&tx=3f556f66353c5945a3633ae209a3e0ff`)
			// 	.then((res)=>{
			// 		var a = res.data.data.splice(50)					
			// 		this.productList =  res.data.data
			// 		this.sets = false
			// 		if(! this.productList.length ){
			// 			document.getElementsByTagName('main')[0].innerHTML='没有信息'
			// 		}
			// 	})


				
			},
					
		},
		mounted(){
	
		}
	}

</script>


<style lang='scss' scoped>

#role{
	width: 9.2vw;
    display: inline-block;
    height: 4vw;
    border: 1px solid;
    font-size: 2.66vw;
    text-align: center;
    line-height: 4.8vw;
    border-radius: 1vw;
}

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
					>#set{
		width: 100%;
			height: 60vw;
			position: relative;
	>.in{
			width: 26vw;
			height: 26vw;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			text-align: center;
			line-height: 26vw;
			margin:auto;
			bottom: 0;
			/*animation: tr 5s infinite;*/
			transform-origin: center center ;
				>span{
					width: 6.66vw;
					height: 6.66vw;
					background-color: #334;
					display: inline-block;
					border-radius: 50%; 

				}
				>:nth-child(2){
					background-color: #00d1b2;
					transform: translateY(-11.4vw);
				}
				>:nth-child(1){
					animation: o 1s infinite;
				}
				>:nth-child(2){
					animation: t 1s infinite;

				}
				>:nth-child(3){
					animation: e 1s infinite;

				}
			>#texxxt{
				display: inline-block;
				color: red;
				font-size: 5vw;
				font-style: normal;
				font-weight: 600;	
				/*font-size: 20vw;*/
				animation:  aa 1s infinite;
				background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#00d1b2), to(#fff));
			    -webkit-background-clip: text;
			    -webkit-text-fill-color: transparent;
			}

		}

}
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
						font-size: 3.5vw;
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