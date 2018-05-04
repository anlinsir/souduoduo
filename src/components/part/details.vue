<template>
	<div class="warp">
		<header>
			<span @click='toIndex'>></span>
			<span>详情</span>
			<p>
				<img src="/static/img/businessservice_icon_phone_m.png">
				<img class="aa" src="/static/img/home_icon_home_gray.png">
			</p>
			
		</header>

		<main>
			<!-- 基本信息 -->
			<div v-if='work != 3' class="basic">
				<div class="header" v-for='(item,index) in details' :key='index'>
					<dl>
						<dt><img :src="item.header_img"></dt>
						<dd>
							<p class="over">{{item.nickname}}</p>
							<p class="dlP">
								<p class="san" style="display: inline-block; color: #666666;font-size: 2.6vw;width: 40vw;overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;">
									<span style="margin-right: 5vw;color: #666666;font-size: 2.6vw">{{item.create_time}}</span>
									<span style="color: #666666;font-size: 2.6vw;">{{item.city}} </span>
									<span style="color: #666666;font-size: 2.6vw">{{item.address}}</span>
								</p>
								<span style="float: right;color: #f15a4a">${{item.price}}</span>

							</p>
						</dd>
					</dl>

					<!-- 介绍 -->
					<div  class="introduce">
						<span>{{item.introduce}}</span>
					</div>
					<!-- 介绍  end -->
					<!-- 图片 -->
					<div class="imgs" >
						<p>
							<img :src="items.image + '200_200.jpg'" v-for='(items,index) in item.images' :key='index'>
						</p>
					</div>
					<!-- 图片 end -->		
				</div>

			</div>		
			<!-- 基本信息  end -->

			<div v-if='work != 3' class="want">
				<div class="heImg">
					<img v-if='thumbs && thumbs.length > 0' src="#" v-for='(item,index) in thumbs' :key='index'>
					
					<span class="wantProson">想要{{thumbs && thumbs.length > 0 ?thumbs.length:0}}</span>

				</div>

				<p>浏览100次</p>
			</div>

			<div v-if='work == 3' class="workWarp" v-for='(item,index) in details' :key='index'>
				<div class="workTop">
					<p>{{item.title}}</p>
					<p>${{item.price}}/每月</p>
					<p><span>更新：{{item.create_time}}</span><span>{{item.browse}}</span></p>
				</div>
				<div class="workBot">
					职位：<span>{{item.category_name}}</span>地点：<span>{{item.city}}{{item.area}}</span>
				</div>

			</div>

			<div v-if='work == 3' class="workDiscription">
				<p>职位描述</p>
				<p>{{introduce}}</p>

			</div>





			<div class="downLoad">
				<dl>
					<dt><img src="/static/img/phone.png"></dt>
					<dd>安装简购生活APP，查看 <span>{{nickname}}</span> 的详细信息</dd>

				</dl>
			</div>

			<!-- xx 根据 this.status 判断返回信息的类型 信息 -->
			<div class="infomation">
				<div class="proson" v-if='role == 1' v-for='(item,index) in details' :key='index'>
					<dl>
						<dt><img :src="item.header_img"></dt>
						<dd><span>{{item.nickname}}</span><span>查看更多信息></span></dd>
					</dl>
				</div>
				<div class="merchant" v-else='role'>
					<p class="headerShow"><span>{{ role == 2 ? '商家': '经纪人'}}信息</span><span>查看详细信息></span></p>
					<dl v-for='(item,index) in details' :key='index'>
						<dt>
							<img :src="item.merchant.header ? item.merchant.header :item.merchant.header_img">
						</dt>
						<dd>
							<span>{{item.merchant.zh_name}} <img style="width: 3.46vw;height: 3.46vw;" src="/static/img/businessservice_icon_vip.png"></span>
							<span>{{item.merchant.en_name}}</span>
						</dd>						
					</dl>
					<div class="detail">
						<ul>
							<li>
								<p><img src="/static/img/recruitment_icon_businessmen.png"><span>{{role == 2 ? '商家' : '经纪人'}}</span></p>
								<p><img src="/static/img/recruitment_icon_weixin_gray.png"><span>微信认证</span></p>
								<p><img src="/static/img/businessservice_icon_zhizhao_gray.png"><span>{{role == 2 ? '营业执照认证' : '身份证认证'}}</span></p>

							</li>
							<li>
								<p><span>行业知识</span><span>0.0</span></p>
								<p><span>产品质量</span><span>0.0</span></p>
								<p><span>服务水平</span><span>0.0</span></p>
							</li>
							<li>
								<span>{{item.score || '0.0'}}</span>
								<p :style="{width:item.score? item.score : 100  + '%'}"><img  src="/static/img/vehicle_icon_star.png"></p>
							</li>

						</ul>
						

					</div>

				</div>


			</div>
				<div class="addressWarp" v-if='role == 3'>
					<div class="address">
						{{details[0].merchant.address? details[0].merchant.address : '' }}
					<span>></span>					

					</div>
				</div>

			<div class="commentWarp">
				<div class="comHeadW">
					<div class="head">
						<p>评论 · {{comments.length}}</p>
						
					</div>
					
				</div>
				<div v-if='comment' class="comment">
						{{comment}}
				</div>	
				<div class="comments" v-if='comments.length != 0' v-for='(item,index) in comments'>
					<dl>
						<dt><img :src="item.senter_header"></dt>
						<dd>
							<p>{{item.senter_nickname}}</p>
							<p><span>来自</span><span>{{item.create_time}}</span></p>
						</dd>

					</dl>
					<p>{{item.comments}}</p>
				</div>
				
			</div>

			<!-- 信息  end -->

			<!-- 评论  -->
			<!-- 评论  end -->

			
		</main>

		<Footer></Footer>

	</div>

</template>


<script>
	import axios from 'axios'
	import Footer from '../../components/footer'

	export default {
		data(){
			return({
				details:[],
				status:-1,
				nickname:null,
				role:-1,
				comment:null,
				comments:[],
				thumbs:false,
				work:0
			})
		}
		,
		components:{
			Footer
		},
		methods:{
		introduce(){

		},
			toIndex(){
				//this.$router.push('/index')
				//退后
				history.back(1)

			}
		},
		created(){
			 this.work = this.$route.query.g
			 console.log(this.work)
				axios.get(`https://time2.jglist.com/index.php?r=magor/five/details&auth_name=name&grand_id=${this.$route.query.g}&id=${this.$route.params.id}&name=1&tx=3f556f66353c5945a3633ae209a3e0ff&user_id=1402`)
						.then(res => {						
							this.details = [res.data.data]
							console.log(this.details)

							this.status = this.details[0].role
							this.nickname = this.details[0].nickname
							this.role = this.details[0].role
							this.thumbs = this.details[0].thumbs
							this.introduce = this.details[0].introduce ?  this.details[0].introduce : ''
				

							axios.get(`https://time2.jglist.com/index.php?r=magor/five/comments&auth_name=name&grand_id=${this.details[0].grand_id}&id=${this.details[0].user_id}&name=1&tx=3f556f66353c5945a3633ae209a3e0ff`)
								.then(res=>{
									if(res.data.data.length == 0){
										this.comment = '快来发布第一条评论吧'
									}else{
										this.comments = res.data.data
									}

								})

				})

				
					
		},
		mounted(){
			// window.addEventLitenser('scroll',function(){
			// 	console.log('S')
			// })

		}
	}

</script>


<style scoped lang="scss">
	.warp{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f3f3f3;
		>header{
			width: 100%;
			height: 11.73vw;
			background-color: #fff;
			padding: 0 4vw;
			box-sizing: border-box;
			font-size: 4vw;
			text-align: center;
			line-height: 11.73vw;
			overflow: hidden;
			:nth-child(1){
				float: left;
				width: 10vw;
				display: inline-block;
			}
			:nth-child(3){
				float: right;
				:nth-child(1){
					transform: translateX(-5vw);
					width: 7vw;
					margin-top: 2.5vw;
					display:inline-block;
				}
				.aa{
					display: inline-block;
					width: 8vw;
					margin-top: 2.5vw;


				}

			}

		}
		>main{
			margin-top: 1px;
			flex:1;
			overflow: auto;
			>.workWarp{
				width: 100%;
				height: 38.13vw;
				background-color: #fff;
				margin-bottom: 2.66vw;
				font-size: 4vw;
				>.workTop{
					width: 100%;
					height: 26.26vw;
					border: 1px solid #eee;
					padding: 4.66vw 4vw 3.5vw;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					>:nth-child(1){
						font-size: 4.5vw;
					}
					>:nth-child(2){
						font-size: 3.6vw;
						color: #fb6b5c;
					}
					>:nth-child(3){
						font-size: 2.93vw;
						color: #999999;
						:nth-child(2){
							float: right;
						}
					}
				}
				>.workBot{
					padding: 4vw 4vw 0;
					box-sizing: border-box;
					font-size: 3.2vw;
					color: #666666;

					:nth-child(1){
						color: #333333;
						margin-right: 5.5vw;
					}
					:nth-child(2){
						color: #333333;
					}
				}
			}
			>.workDiscription{
				width: 100%;
				min-height: 28.66vw;
				background-color: #fff;
				margin-bottom: 2.66vw;
				>:nth-child(1){
					padding: 3.5vw 4vw 0;
					box-sizing: border-box;
					height: 11.73vw;
					color: #999999;
					font-size: 4vw;
					border-bottom: 1px solid #eee;
				}
				>:nth-child(2){
					padding: 3.5vw 4vw 3.5vw;
					font-size: 4vw;
					color: #333333;
				}
			}
			>.basic{
				width: 100%;
				min-height: 20vw;
				padding: 0 4vw;
				box-sizing: border-box;
				font-size: 4vw;
				padding-top:4.26vw;
				background-color: #fff; 
				>.header{
					width: 100%;
					min-height: 11.2vw;
					>dl{
						display: flex;
						width: 100%;
						height: 11.2vw;
						>dt{
							height: 11.2vw;
							width: 11.2vw;
							>img{
								width: 100%;
								height: 100%;
								border-radius: 50%;
							}

						}
						>dd{
							width: 84%;
							margin-left: 3.2vw;

							>.over{
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;	

							}
							>.dlP{
								font-size: 2.6vw;
								color: #666666;
								margin-top: 2vw;
								display: flex;
								justify-content: space-between;
								
							}
						}

					}
					>.introduce{
						margin-top: 4vw;
						min-height: 5vw;
						text-align: center;
						margin-bottom: 4.2vw;
						>span{
						display: inline-block;
						text-align: justify;

						}
					}
					>.imgs{
						width: 100%;
						margin-bottom: 1vw;

						>p{
							width: 100%;
							>img{
								width:100%;
							}
						}
					}
					
				}
			}
			>.want{
				background-color: #fff;
				width: 100%;
				padding: 0 4vw;
				box-sizing: border-box;
				height: 10.93vw;
				margin-bottom: 2.66vw;
				>.heImg{
					width: 23vw;
					height: 5.33vw;
					position: relative;
					line-height: 5.33vw;
					display: inline-block;
					margin-top: 2.93vw;
					>img{
						position: absolute;
						width: 5.33vw;
						height: 5.33vw;
					}
					>:nth-child(2){
						left: 2vw;
						z-index: 2,
					}
					>:nth-child(3){
						left: 4vw;
						z-index: 3;
					}
					>.wantProson{
						color: #31aefe;
						font-size: 2.93vw;
						float: right;
					}
				}
				>p{
					float: right;
					margin-top: 2.93vw;
					font-size: 2.66vw;
					color:#999999;
				}
				
			}
			>.downLoad{
				background-color: #fff;
				width: 100%;
				height: 16vw;
				border: 1px solid #f3f3f3;
				box-sizing: border-box;
				padding: 0 4vw;
				>dl{
					display: flex;
					font-size: 4vw;
					margin-top: 2.66vw;

					>dt{
						width: 6.93vw;
						height: 10.66vw;
						margin-right: 3.33vw;
						>img{
							width: 100%;
							height: 100%;
						}
					}
					>dd{
						>span{
							color: #00d1b2;
						}
					}
				}

			}
			>.infomation{
				width: 100%;
				min-height: 16vw;
				background-color: #fff;
				padding: 0 4vw;
				box-sizing: border-box;
				margin-bottom:2.66vw;
				>.proson{
					width: 100%;
					height: 100%;
					overflow: hidden;
					>dl{
					margin-top: 2.4vw;
						width: 100%;
						display: flex;
						>dt{
							margin-right: 2.66vw;
							width: 11.2vw;
							height: 11.2vw;
							>img{
								width: 100%;
								height: 100%;
								border-radius: 50%;

							}	
						}
						>dd{
							width: 85%;
							font-size: 4vw;
							font-weight: 600;
							margin-top: 3.6vw;
							>:nth-child(2){
								font-size: 3.33vw;
								color: #00d1b2;
								font-style: italic;
								font-weight: normal;
								float: right;
							}
						}

					}
				}
				>.merchant{
					width: 100%;
					min-height: 20vw;
					background-color: #fff;
					>.headerShow{
						font-size: 3.46vw;
						color: #666666;
						margin-bottom: 4vw;
						>:nth-child(2){
							float: right;
							font-style: italic;
							color: #00d1b2;
						}
					}
					>dl{
						display: flex;
						margin-bottom: 4vw;
						>dt{
							width: 11.2vw;
							height: 11.2vw;
							margin-right: 4vw;

							>img{
								width: 100%;
								height: 100%;
								border-radius: 50%; 
							}
						}
						>dd{
							display: flex;
							flex-direction: column;
							>:nth-child(1){
								font-size: 3.5vw;
								font-weight: 600;
								color: #353535;
								margin-bottom: 1vw;
							}
							>:nth-child(2){
								font-size: 2.4vw;
								color: #353535
							}
						}
					}
					>.detail{
						width: 100%;
						height: 22vw;
						>ul{
							display: flex;
						height: 22vw;

							>li:not(:nth-child(3)){
								width: 33.3%;
								height: 22vw;

								border-right: 1px solid #eee;
							}
							>:nth-child(2){
								>p{
									padding-left: 7.5vw;
									box-sizing: border-box; 
								}
							}
							>:nth-child(3){
									float: right;
								    padding-left: 6vw;
								    padding-top: 4vw;
									width: 20.8vw;
									text-align: center;
								>p{

									overflow: hidden;

									>img{
										width: 20.8vw;
										height: 3.73vw;
									}
								}
								>span{
									font-size: 4vw;
									margin-top: 4vw;
								}
							}
							>:nth-child(1){
								padding-top: 1vw;
								box-sizing: border-box;
								

								>p{
									height: 4.26vw;
									line-height: 4.26vw;
									margin-bottom: 2.66vw;
									font-size: 2.66vw;
									>img{
										width: 4.26vw;
										height: 4.26vw;
										vertical-align: middle;
										margin-right: 2vw;
									}
									
								}
							}
							>:nth-child(2){
							
								padding-top: 1vw;
								box-sizing: border-box;
								>p{
									font-size: 2.66vw;
									color: #353535;
									margin-bottom: 3vw;

									>:nth-child(2){
										color: #f15a4a;
									}
								}
							}
						}

					}

				}
			
			}
			>.addressWarp{
				width: 100%;
				box-sizing: border-box;
				padding: 0 0 0 4vw;
				height: 11.6vw;
				background-color: #fff;
				line-height: 11.6vw;
				font-size: 3.2vw;
				margin-bottom: 2.66vw;
				>.address{
						padding: 0 4vw 0 0 ;
						box-sizing: border-box;	
					border-top:1px solid #e8e8e8;
					>span{
						float: right;

					}

				}
			}
			>.commentWarp{
				width: 100%;
				min-height: 56.8vw;
				background-color: #fff;

				>.comHeadW{
					width: 100%;
					height: 12vw;
					padding: 0 4vw;
					padding-top: 3.33vw;
					box-sizing: border-box;
					>.head{
						box-sizing: border-box;
						font-size: 3.76vw;
						border-left: 1vw solid #00d1b2;
						padding-left: 2vw; 
					}
				}
				>.comment{
					width: 100%;
					min-height: 56.8vw;
					text-align: center;
					line-height: 56.8vw;
					font-size: 3.2vw;
					border-top: 1px solid #e8e8e8;
					box-sizing: border-box;
					color: #00d1b2;
				}
				>:nth-last-child(1){
						border-bottom:1px solid #e8e8e8; 
					}
				>.comments{
					width: 100%;
					min-height: 34.66vw;
					border-top: 1px solid #e8e8e8;
					padding: 4vw;
					box-sizing: border-box;
					text-align: center;
					
					>dl{
						width: 100%;
						display: flex;
						height:9.33vw;
						margin-bottom: 2.5vw;
						text-align: left;
						>dt{
							width: 9.33vw;
							height: 9.33vw;
							border-radius: 50%;
							margin-right: 2.66vw;
							background-color: red;
							>img{
								width: 9.33vw;
							height: 9.33vw;
								border-radius: 50%;
							}
						}
						>dd{
							width: 80vw;
							height: 9.33vw;
							>:nth-child(1){
								font-size: 2.66vw;
								color: #333333;
							}
							>:nth-child(2){
								font-size: 2.4vw;
								color: #999999;
								>:nth-child(2){
									float: right;

								}
							}
						}
					}
					>p{
						font-size: 3.2vw;
						word-break : break-all ;
						color: #333;
						 text-align:justify;display:inline-block;

					}
				}

			}
		}
	}
	
</style>