<template>
	<div class="warp">
		<div v-show='showw' class="float">
			<div class="header">
				<span @click='otherShow'><img style="transform: rotateZ(90deg) translateX(5vw) translateY(-4vw);
				width: 5vw;
				height: 2.26vw;" src="/static/img/trader_icon_jdown_green.png"></span><span>选择类别</span>
			</div>
			<ul>
				<li @click='getPart' :data-id='index' :key='index'  v-for='(item,index) in parts'>
					<p :data-id='index'><img :data-id='index' :src="item.img"></p>
					<p :data-id='index'>{{item.text}}</p>
				</li>
				
			</ul>
		</div>
		<Header left='2' color='#00d1b2'  @show='show' :part='part'></Header>

		<main>
			 <dl v-for='(item,index) in productList' :key='index'>
				<dt><img :src="item.image+'200_200.jpg'"></dt>
				<dd>
					<p>{{item.title}}</p>
					<p><span>${{item.price}}</span><span>1</span></p>
					<p><span>{{item.city}}</span><span>{{item.area}}</span><span>{{item.create_time}}</span></p>
				</dd>
			</dl> 

<div v-show='sets' id="set">
				<div class="in">
					<span class="o"></span>
					<span class="t"></span>
					<span class="e"></span>
					<i id="texxxt">简购中 ...</i>
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
				showw:false,
				sets:false,
				part:null,

				parts:[
					{
						img:'/static/img/search_icon_1.png',
						text:"闲置二手"
					},
					{
						img:'/static/img/search_icon_2.png',
						text:"新旧车辆"
					},
					{
						img:'/static/img/search_icon_3.png',
						text:"工作招聘"
					},
					{
						img:'/static/img/search_icon_4.png',
						text:"房屋租赁"
					},
					{
						img:'/static/img/search_icon_5.png',
						text:"商家服务"
					},
					{
						img:'/static/img/search_icon_6.png',
						text:"附近美食"
					},
					{
						img:'/static/img/search_icon_7.png',
						text:"附近优惠"
					},
					{
						img:'/static/img/search_icon_8.png',
						text:"周边游"
					}

				]//选择类别
			})
		},
		components:{
			'Header':Header,
			'Footer':Footer
		},
		methods:{
			show(foo){
				this.showw = foo

			},

			otherShow(){
				this.showw = false
				this.sets = true
			},
				getPart(e){
				this.showw = false

				this.part = Number(e.target.dataset.id) + 1
				localStorage.Part = this.part 
				if(!localStorage.text && localStorage.text != this.text){
						alert('请输入关键词')
						return
					}
				let  val =  this.$route.query.val
			let part = this.$route.query.part
			if(!localStorage.text){
				alert('输入关键词')
				this.$router.replace('/index')
			}
			console.log(localStorage.text)
			axios.get(`https://time2.jglist.com/index.php?r=homepage/home/search&search=${localStorage.text}&page=1&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff`)
				.then((res)=>{
					var a = res.data.data.splice(20)					
					this.productList =  res.data.data
					this.sets = false
					if(! this.productList.length ){
						document.getElementsByTagName('main')[0].innerHTML='没有摘掉'
					}
				})


				
			},
		},
		mounted(){
	
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

		>.float{
			padding: 0 4vw;
			box-sizing: border-box;
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: #fff;
			z-index: 2;
			font-size: 4vw;

			>.header{
				width: 100%;
				height: 11.6vw;
				background-color: #fff;
				border-bottom: 1px solid #eeeeee;
				text-align: center;
				line-height: 11vw;
				overflow: hidden;
				:nth-child(1){
					position: absolute;
					top: 0;
					left: -1vw;
					width: 20vw;
					float: left;
				}
			}
			>ul{
				width: 100%;
				margin-top: 5vw;
				display: flex;
				
				flex-wrap: wrap;
				padding:  0  0  0 5.73vw  ;
				box-sizing: border-box;

				>li{
					margin-right: 8vw;
					width: 20vw;
					height: 20vw;
					margin-bottom:5vw; 
					text-align: center;
					:nth-child(1){
						display: inline-block;
						width: 10vw;
						height: 10vw;
					}
				}
			}
		}
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