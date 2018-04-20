<template>
	<div class="warp">
		<div v-show='showw' class="float">
			<div class="header">
				<span @click='otherShow'>></span><span>选择类别</span>
			</div>
			<ul>
				<li @click='getPart' :data-id='index' :key='index'  v-for='(item,index) in parts'>
					<p :data-id='index'><img :data-id='index' :src="item.img"></p>
					<p :data-id='index'>{{item.text}}</p>
				</li>
				
			</ul>
		</div>
		<Header @show='show' :part='part'></Header>

		<main>
			<!-- 下载的部分 -->
			<section class="downloadWarp">
				<div class="downloadWarpRight">
					<dl>
						<dt><img src="/static/img/icon.png"></dt>
						<dd>
							<p>简购生活</p>
							<p>华人生活的百宝箱</p>
						</dd>
					</dl>
					<button  class="openApp">打开简购生活</button>
					<button class="downApp">下载APP想优惠</button>
				</div>
			</section>
			<!-- 选项部分  -->
			<section class="partWarp">
				<ul>
					<li v-for="(item,index) in li" :key='index'>
						<img :src="item.img">
						<span>{{item.text}}</span>
						<span v-if='item.new' class="new">new</span>
					</li>
					
					
					
				</ul>
				<ul>
					<li  v-for="(item,index) in lis" :key='index'>
						<img :src="item.img">
						<span>{{item.text}}</span>
						<span v-if='item.new' class="new">new</span>

					</li>				
				</ul>
			</section>
			<!-- 优惠滚动 -->
			<section class="discountsWarp"> 
				<img src="/static/img/jgDiscounts.png">
				<transition-group class='Warp' tag='div'  name="slide-fade" mode="out-in">
					<dl :data-id='item.privilege_id' v-show='yes == index' v-for='(item,index) in discounts' :key='index'>
						<dt><img :src="item.image"></dt>
						<dd>
							<p>{{item.title}}</p>
							<p>{{item.cate_title}}</p>
						</dd>
					</dl>
				</transition-group >
			</section>
			<!-- 优惠滚动  end-->
			<!-- 商家 -->
			<section class="merchantWarp">
				<div class="merchantWarpHeader">
					<p>精选商家</p>
					<p>更多 < </p>
				</div>
				<ul class="merchantShow">
					<li :data-merchant-id='item.merchant_id' :data-shop-id='item.shop_id' v-for='(item,index) in merchant' :key='index'>
						<img :src="item.image">
						<p>
							<span :title="item.zh_name">{{item.zh_name}}</span>
							<span>精选商家 </span>
						</p>
					</li>
					
				</ul>
			</section>
			<!-- 商家  end-->

			<!-- .. -->
			<section class="routerPart">
				<div class="routerLink">
					<p :data-id='index' @click='changeActive(index)' :class="active == index ? 'active' : '' " v-for='(item,index) in two' :key ='index'>
						{{item}}
					</p>
				</div>
				<div class="routerView">
					<dl v-for='(item,index) in newest'  :key='index'>
						<dt><img :src="item.image" /></dt>
						<dd>
							<p>{{item.title}} <span v-show='hows' >dslfm</span></p>
							<p><span>${{item.price}}</span><span>{{item.type}}</span></p>
							<p><span>{{item.address}}</span><span>{{item.create_time}}</span></p>
						</dd>
						
					</dl>

					
				</div>

			</section>
			<!-- .. end -->

			<!-- 结尾 -->
				<section class="endWarp">
					<div class="endText">
						<p>关于&nbsp; | &nbsp;帮助&nbsp; | &nbsp;下载</p>
						<p>Copyright © 2017 , JGlist.com</p>
					</div>				

				</section>


			<!-- 结尾 end -->				
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
				li:[
					{
						img:'/static/img/home_icon_second.png',
						text:'闲置二手'
					},
					{
						img:'/static/img/home_icon_vehicle.png',
						text:'新旧车辆'
					},
					{
						img:'/static/img/home_icon_work.png',
						text:'工作招聘'
					},
					{
						img:'/static/img/home_icon_housing.png',
						text:'房屋租赁'
					},
					{
						img:'/static/img/home_icon_service.png',
						text:'商家服务'
					},

				],
				lis:[
					{
						img:'/static/img/home_icon_food.png',
						text:'附近美食'
					},
					{
						img:'/static/img/home_icon_preferential.png',
						text:'附近优惠'
					},
					{
						img:'/static/img/home_icon_tourism.png',
						text:'周边游'
					},
					{
						img:'/static/img/home_icon_exr.png',
						text:'汇率换算',
						new:true
					},
					{
						img:'/static/img/home_icon_trlt.png',
						text:'在线翻译',
						new:true
					}
				],
				discounts:[
						

					],
				yes:0,
				active:0,
				showw:false,
				part:null,
				two:['最近发布','附近商家'],
				merchant:[],
				
				tem:[],//暂存
				tem2:[],
				newest:[],//最新发布 和 附近商家,
				hows:false,
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
			changeActive(index){
				this.active = index
				if(index == 1){//记载第二个				
					this.newest = this.tem2
					this.hows = true

				}else{
					this.newest = this.tem
					this.hows = false

				}
				//判断点击的是哪一个  加载数据
			},
			show(foo){
				this.showw = foo
			},
			otherShow(){
				this.showw = false
			},
			getPart(e){
				this.part = Number(e.target.dataset.id) + 1
				
				if(typeof this.part != 'undefined'){

					this.showw = false
				}
			}
		},
		mounted(){
			if(this.yes <=0){
				let timer =  setInterval(()=>{
					this.yes++					
					if(this.yes > this.discounts.length - 1){
						this.yes = 0
					}
				},5000)	
				if(this.discounts.length == 1){
					cleartInterval(timer);
				}

			}
			//得到优惠数据
			axios.get(baseUrl + 'website/index/blend&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					this.discounts = res.data.data.privilege
					this.merchant =res.data.data.merchant 
			})
				//获取 最新发布
			axios.get(baseUrl + 'v2/home/fresh&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					this.tem = res.data.data
					this.newest = this.tem
			})
				//附近商家
			axios.get('http://106.14.56.22:9529/index.php?r=v2/home/fresh&auth_name=id&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
					.then((res)=>{
						this.tem2 = res.data.data

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
					border: 1px solid;
					:nth-child(1){
						display: inline-block;
						width: 10vw;
						height: 10vw;
					}
				}
			}
		}
		main{
			flex: 1;
			overflow: auto;

			>.downloadWarp{
				width: 100%;
				height: 34.66vw;
				background-color: #f3f3f3;
			    background-image: url(/static/img/indexDown.png);
			    background-repeat: no-repeat;
			    background-position: -18px 2px;
			    background-size: 52vw 33vw;
				padding: 0 4vw;
				box-sizing: border-box;
				>.downloadWarpRight{
					display: inline-block;
					float: right;
					width: 57.73vw;
					height: 25.33vw;
					margin-top: 4vw;
					>dl{
						display: flex;
						margin-bottom: 3.2vw;
						>dt{
							margin-right: 3.2vw;
							width: 11.73vw;
							height: 11.73vw;
							>img{
								width: 100%;
								height: 100%;
							}
						}
						>dd{
							:nth-child(1){
								font-size: 4vw;
								font-weight: 600;
							}
							:nth-child(2){
								font-size: 3.2vw;
							}
						}
					}
					>button{
						width: 25.86vw;
						height: 9.6vw;
						border: none;
						background-color: none;
						border: 0.42vw solid;
						border-radius: 1vw;						
						font-size: 3.2vw;
					}
					>.openApp{
						box-sizing: border-box;
						border-color: #00d1b2;
						background-color: #fff;
						color: #00d1b2;
						margin-right: 3.2vw;
					}
					>.downApp{
						box-sizing: border-box;
						background-color: #00d1b2;	
						color: #fff;
						border-color: #00d1b2;

					}

				}
			}
			>.partWarp{
				width: 100%;
				height: 44.66vw;
				padding: 4.8vw  4vw 0;
				box-sizing: border-box;
				background-color: #fff;
				margin-bottom: 1px;
				>:nth-child(1){
					margin-bottom: 5.2vw;
				}
				>ul{
					width: 100%;

					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;

					>li{
						text-align: center;
						width: 13.5vw;
						height: 15.46vw;
						list-style: none;
						position: relative;
						>img{
							width: 10.66vw;
							height: 10.66vw;
							margin: 0;
						}
						>span{
							font-size: 2.8vw;
						}
						.new{
							display: inline-block;
							width: 7.33vw;
							height: 3.2vw;
							position: absolute;
							text-align: center;
							line-height: 2.5vw;
							right: 0;
							font-size: 3.2vw;
							color: #fff;
							top: -1vw;
							background-color: #f85241;
							border: 0.2vw solid #fff;
							border-radius: 2vw;

						}
					}
				}
			}
			>.discountsWarp{
				width: 100%;
				height: 16vw;
				background-color: #fff;
				padding: 3.2vw 4vw 3.2vw;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				margin-bottom: 2.66vw;
				>img{
					width: 12.73vw;
   					height: 10.13vw;
					padding-right:3vw;
					box-sizing: border-box;

				}
				.Warp{
					flex: 1;
					border-left: 1px solid #eeeeee;

						>dl{
					
						>dt{
							float: right;
							width: 10.66vw;
							height: 10.66vw;
							>img{
								width: 100%;
								height: 100%;
							}
						}
						>dd{
							float: left;
							padding-left: 4.8vw;
							box-sizing: border-box;
						
							>p{
								font-size: 3vw;
								color: #333333;
							}
						}
					}
				}
				
			}
			>.merchantWarp{
				width: 100%;
				height: 43.66vw;
				background-color: #fff;
				padding: 4vw 4vw 0;
				box-sizing: border-box;
				>.merchantWarpHeader{
					overflow: hidden;
					margin-bottom: 4.8vw;
					:nth-child(1){
						font-size: 4vw;
						color: #9e7141;
						float: left;
						font-weight: 600;
					}
					:nth-child(2){
						font-size: 3.2vw;
						color: #999;
						float: right;
						margin-top: 0.5vw;
					}
				}
				>.merchantShow{
					display: flex;
					justify-content: space-around;
					>li{
						>img{
							width: 16vw;
							height: 16vw;
						}
						>p{
							display: flex;
							flex-direction: column;
							:nth-child(1){
								font-size: 3.33vw;
								display: inline-block;
								width: 17vw;
								text-align: center;
    							white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;

							}
							:nth-child(2){
								display: inline-block;
								font-size: 2.53vw;
								text-align: center;
								margin-left: 1.5vw;
								border: 1px solid #00d1b2;
								border-radius: 1vw;
								width: 13.53vw;
								height: 3.46vw;
								margin-top:1vw;
								line-height: 3.46vw;
								padding : .5vw 0;

								color:  #00d1b2;
							}
						}

					}
				}
			}
			>.routerPart{
				margin-top: 2.66vw;
				width: 100%;
				min-height: 20vw;
				background-color: #fff;
				padding:  0 4vw 0;
				box-sizing: border-box;
				>.routerLink{
					width: 100%;
					height: 11.86vw;
					display: flex;
					justify-content: space-between;
					margin-bottom:2px; 
					>p{
						width: 50%;
						height: 100%;
						line-height: 11.86vw;
						text-align: center;
						font-size: 3.33vw;
						color: #999;
					}
					>.active{
							border-bottom: 1px solid #00d1b2;
							color: #333;
						}
				}
				>.routerView{
					width: 100%;
					min-height: 20vw;
					>dl{
						width: 100%;					
						height: 28.53vw;
						padding: 4vw 0;
						box-sizing: border-box;
						border-top: 1px solid  #eeeeee;
						display: flex;
						>dt{
							width: 20.53vw;
							height: 20.53vw;
							>img{
								width: 20.53vw;
							height: 20.53vw;
							}
						}
						>dd{
								text-overflow: ellipsis;
							    white-space: nowrap;
							    overflow: hidden;
							:nth-child(1){
								width: 68vw;
								margin-left: 4vw;
								font-size: 4vw;
								color: #353535;
								text-overflow: ellipsis;
							    white-space: nowrap;
							    overflow: hidden;
							}
							:nth-child(2){
								:nth-child(1){
									color: #f15a4a;
									font-size: 3.33vw;
								}
								:nth-child(2){
									display: inline-block;
									width: 9.3vw;
									height: 4vw;
									border-radius: 1vw;
									text-align: center;
									line-height: 4vw;
									float: right;
								}
							}
							:nth-child(3){
								:nth-child(1){
									font-size: 2.66vw;
									color: #999999;
								}
								:nth-child(2){
									float: right;
									font-size: 2.66vw;
									color: #999999;
								}
							}
						}

					
					}
				}
			}
			>.endWarp{
				width: 100%;
				height: 22vw;
				background-color: #f3f3f3;
				text-align: center;
				>.endText{
					width: 100%;
					height: 22vw;
					 margin-top: 11vw;
					font-size: 2.93vw;
					color: #999999;
					:nth-child(1){
						margin-bottom: 2vw;
					}
				}

			}


		}
	
	}


/*轮播动画*/
.slide-fade-enter-active {  transition: all 1s ease;}
.slide-fade-leave-active {  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.slide-fade-enter, .slide-fade-leave-to {  transform: translateY(-6vw);  opacity: 0;}
	



</style>