<template>
	<div>
		<ul>
			<li @click='getDetails(index)' :data-id='item.shop_id && item.shop_id !=0 ? item.shop_id : item.id' v-for='(item,index) in data' :key='index' :style="{minHeight: change ? '24.9vw' : '36.66vw' }" class='dataid'>
				<dl :data-id='item.shop_id'>
					<dt><img  :data-id='item.shop_id' :src="item.image + '200_200.jpg'"></dt>
					<dd>
						<div :data-id='item.shop_id' class="top" :style="{borderBottom: change ? 'none': '1px dashed #eee' , padding: change ? '0':'0 0 1vw 0'}">
							<p :data-id='item.shop_id' class="title"><span v-if='item.recommend == 1' class="recommend">推荐</span><span class="zh_name">{{item.zh_name || item.title}}</span>
							<img :data-id='item.shop_id' v-if='item.license' src="/static/img/businessservice_icon_vip.png">
							</p>
							<p class="star" :data-id='item.shop_id'>
								<span class="starNUm">
									<div>
										<p :style="{ width	: item.score?  item.score * (10) + '%':item.star * (10) + '%' }"><img src="/static/img/vehicle_icon_star.png"></p>
									</div>
								{{item.score || item.star}}
								</span>
								<span>评论{{item.comments}}条</span>
								<span v-if='item.open' class="isOpen">营业中</span>
							</p>
							<p class="where" :data-id='item.shop_id'>
								<span class="cate_title" v-if='item.cate_title || item.category_title'>{{item.cate_title  || item.category_title | re}}</span>
								<span v-if='item.playtime'>游玩时长：{{item.playtime}}</span>
								<span class="right">
									<span class="mon" v-if='item.price'>{{item.price}}/人 |</span>
									<span class="distance">{{item.distance}}英里</span>
								</span>
							</p>
						</div>
						<!-- 一条线 -->
						<div :data-id='item.shop_id'  v-if='item.activity' class="more" :class="show == index ? 'ismore' : ''" >
							<p v-for='(item,index) in item.activity'>
								<span v-if='item.verify == 1' class="juan">劵</span>
								<span v-if='item.verify == 0' class="hui">惠</span>
								<span class="activityCon" :data-id='item.id'>{{item.info}}</span>
								<span @click='showMore(index)' id='more' >8个活动▼</span>
							</p>
							 <p :data-id='item.shop_id' v-if='item.activity.length == 0' style="text-align: center;">此商家还没有活动和优惠哟</p>
							

						</div>
					</dd>
				</dl>
			</li>
		</ul>

	</div>


</template>


<script>
	export default {
		data(){
			return({
				show:-1,
				change:0,
				id:null
				
		
			})
		},
		methods:{
			showMore(index){
				if(this.show == index && this.show != -1 ){
					this.show = -1
					return
				}
				this.show = index
			},
			getDetails(index){
				this.id = document.getElementsByClassName('dataid')[index].dataset.id
				this.$emit('toDetails',this.id)

			}
		},
		props:{
			data:{
				type:Array
			}
		},
		mounted(){
			console.log(this.data)
		},
		filters:{
			re(va){
				var r = /,/;
				return va.replace(r,' | ')
			}
		},
		created(){
			if(this.$route.path.substring(6) =='jour'){
				this.change = 1
				console.log(this.change)
			}
		}
	}
</script>



<style scoped lang="scss">
.ismore{
	height: 20vw !important;
}
	ul{
		width: 100%;
		border-top: 1px solid #eee;
		box-sizing: border-box;
		padding-left:4vw; 
		>li:not(:nth-child(1)){
			border-top: 1px solid #EEE;

		}
		>:nth-last-child(1){
			border-bottom: 1px solid #eee;

		}
		>li{
			padding: 4vw 0;
			min-height: 36.66vw;
			box-sizing: border-box;
			font-size: 2.66vw;
			color: #666666;
			padding-right:4vw; 

			>dl{
				display: flex;
				>dt{
					width: 17.33vw;
					height: 17.33vw;
					margin-right: 2.66vw;
					>img{
						width: 17.33vw;
						height: 17.33vw;
					}
				}
				>dd{
					width: 80%;
					>.top{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						height: 18vw;
						padding: 0 0 1vw 0;
						border-bottom: 1px dashed #eee;
						margin-bottom: 1vw;

						>.title{
							overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap;
							>.recommend{
								display: inline-block;
								width: 7.2vw;
								height: 4vw;
								background-color: #ffec12;
								color: #6f3f15;
								line-height: 4vw;
								text-align: center;
								margin-right: 1.6vw;
							}
							>.zh_name{
								font-size: 3.73vw;
								color: #333333;
								font-weight: 600;
							}
							> img{
								width: 3.46vw;
								height: 3.46vw;
								float: right;
							}

						}
						>.star{
							>.isOpen{
								width: 8.93vw;
								height: 3.2vw;
								display: inline-block;
								color: #fff;
								font-size: 2.66vw;
								background: linear-gradient(to right ,#41e9d0, #01d1b2);
								float: right;
								text-align: center;
								line-height: 3.2vw;
							}
							>.starNUm{
								margin-right: 4vw;
								>div{
									display: inline-block;
									width: 15.46vw;
									height: 2.66vw;

									>p{
										width: 15.46vw;
										height: 2.66vw;
										text-align: center;
										line-height: 2.66vw;
										display: inline-block;
										overflow: hidden;
										>img{
											width: 15.46vw;
											height: 2.66vw;
										}
									}
								}
							}
						}
						>.where{

							>.right{
								float: right;
							}
						}

					}
					>.more{
						height: 4vw;
						overflow: hidden;
						position: relative;
						>p{
							height: 4vw;
						}
						>:nth-child(1){
							>:nth-last-child(1){
								float: right;
							}
						}
						.juan,.hui{
							display: inline-block;
							width: 3.46vw;
							height: 3.46vw;
							background-color: #46bc9f;
							color: #fff;
							line-height: 3.46vw;
							font-size: 2.53vw;
							text-align: center;
							border-radius:.5vw; 
							margin-right: 1.06vw;
						}
						.hui{
							background-color: #f07f73;
						}
					}
				}
			}
		}

	}
	

</style>