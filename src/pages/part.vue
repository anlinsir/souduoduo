<template>
	<div class="warp">
		<Header left='1'></Header>	

		<main>
			<!-- 选择 参数 -->
			<section class="choose">
				<ul>
					<li :class="active == index ? 'active' : '' " @touchstart='choose(index)' v-for='(item,index) in nav ' :key="index">
						{{item.name}}
						<span  v-if='item.sel'></span>
						<ul v-if='item.sel' v-show='showPart == index' :key='index'>
							<li>er</li>
						</ul>
					</li>
				</ul>
			</section>
			<!-- 选择  end -->
			<router-view class='main'></router-view>
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
				nav:[
					{
						name:'区域',
						sel:true
					},
					{
						name:'分类',
						sel:true

					},
					{
						name:'时间'
					},
					{
						name:'距离'
					},
					{
						name:'来源',
						sel:true

					}
				],
				active:0,
				showPart:-1	
			})
		},
		components:{
			'Footer':Footer,
			'Header':Header
		},
		methods:{
			choose(index){
				this.active = index
				if(this.showPart == -1 || this.showPart != index){
					this.showPart = index
				}else{
					this.showPart = -1
				}
				

			}
		},
		created(){
			if(this.$route.path.substring(6) == 'merchant' || this.$route.path.substring(6) =='cate' || this.$route.path.substring(6) =='jour'){
				this.nav = [
						{
							name:'分类',
							sel:true
						},
						{
							name:"距离"
						},
						{
							name:'评分'
						},
						{
							name:'营业'
						}
					]
			}
			if(this.$route.path.substring(6) == 'work'){
				this.nav = [
						{
							name:'区域',
							sel:true
						},
						{
							name:"职位",
							sel:true
						},
						{
							name:'时间'
						},
						{
							name:'薪资',
							sel:true

						}
						,
						{
							name:'来源',
							sel:true
							
						}
					]
			}
			if(this.$route.path.substring(6) == 'privilege'){
				this.nav = [
						{
							name:'分类',
							sel:true
						},
						{
							name:"距离",
						},
						{
							name:'评分'
						},
						{
							name:'筛选',
							sel:true

						}
					
					]
			}
		}
		
	}
</script>



<style lang="scss" scoped>
	.warp{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f3f3f3;

		>main{
			width: 100%;
			height: 100%;
			flex:1;
			overflow: auto;
			background-color: #fff;
			>.choose{
				width: 100%;
				height: 10.66vw;
			border-bottom: 1px solid #f2f2f2;

				background-color: #fff;
				>ul{
					display: flex;
					height: 10.66vw;
					justify-content:space-around;
					font-size: 3.6vw;
					color: #666666;
					>.active{
						color: #111;
					}
					>li{
						width: 20vw;
						text-align: center;
						height: 10.66vw;
						line-height: 10.66vw;
						position: relative;
						>span{
						    border: 2vw solid;
						    border-top: 1vw solid #666;
						    border-right: 1vw solid transparent;
						    border-left: 1vw solid transparent;
						    border-bottom: 1vw solid transparent;
						    position: absolute;
					        top: 4.5vw;
							left: 14vw;
						}
						
					}

				}
			}
			>.main{
				box-sizing: border-box;

			}
		}
	}
</style>