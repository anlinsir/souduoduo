<template>
	<div class="warp">
		<Header left='1'></Header>	

		<main >
			<!-- 选择 参数 -->
			<section class="choose">
				<ul>
					<li :class="active == index ? 'active' : '' " @touchstart='choose(index,$event)' data-iss='warp'  @touchend='choose(index,$event)' @touchmove='choose(index,$event)' v-for='(item,index) in nav ' :key="index">
						{{item.name}}
						<span  v-if='item.sel'></span>
						<ul style="overflow: auto;height: 80vw;box-sizing: border-box;overflow-x:hidden;" v-if='item.sel' v-show='showPart == index' :key='index' id='chooseItem'>
							<li  @touchstart='chooseItem(indexs,$event,items.child)' @touchend='chooseItem(indexs,$event,items.child)' data-iss='inn'   @touchmove='chooseItem(indexs,$event,items.child)' @mouseenter="chooseItem(indexs,$event)" :key='indexs' :data-id='items.id' :data-role="item.role ? item.role: '' " v-for="(items,indexs) in useClassify  ? useClassify[0].child?  useClassify[0].child.length ?   useClassify[0].child: useClassify : useClassify : '' ">
									<span v-if='items.child && items.child.length'>></span>{{items.title}}
								<ul v-if='items.child && showPartItem == indexs'>
									<li @touchstart='hide' v-for='(props,indexs) in items.child' :key='indexs' :data-id='props.id '>
										{{props.title}}
									</li>
								</ul>
							</li>
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
				showPartItem:-1,
				showPart:-1,
				useClassify:null,
				filtercity :null,
				show:-1,
				flag:true
			})
		},
		components:{
			'Footer':Footer,
			'Header':Header
		},
		methods:{

			hide(){


			},
			choose(index,e){
				 switch (e.type) {
	                case 'touchstart':
	                    this.flag = true;
	                    break;
	                case 'touchmove':
	                    this.flag = false;
	                    break;
	                case 'touchend':
	                    if(this.flag){
	                        	this.active = index
									
									if(this.showPart == -1 || this.showPart != index ){
										this.showPart = index
									}else{
									this.showPart = -1
									 }


									var parts = this.$route.path.substring(6)
									// 漫长的判断
										if(parts == 'used' || parts == 'car' || parts == 'rent' || parts == 'work' ){
											if(index == 0){
												this.useClassify  = JSON.parse(localStorage.basedata).filtercity
											}else if(index == 4){
												this.useClassify = [{title:'不限',role:0},{title:'个人',role:1},{title:'商家',role:2},{title:'经纪人',role:3}]
											}
										}



										if(parts == 'used'){
											if(index == 1){
												this.useClassify  =  JSON.parse(localStorage.basedata).category.filter((item,index)=>{
													return item.title == '闲置二手' && item.id == 1
												})
											}
										}else if(parts == 'car'){
											if(index == 1){
												this.useClassify  =  JSON.parse(localStorage.basedata).category.filter((item,index)=>{
													return item.title == '新旧车辆' && item.id == 2
												})
											}
										}else if(parts == 'rent'){
											if(index == 1){
												this.useClassify  =  JSON.parse(localStorage.basedata).category.filter((item,index)=>{
													return item.title == '房屋租赁' && item.id == 4
												})
											}
											
										}





								if(parts == 'merchant'){
									if(index == 0){
										this.useClassify = JSON.parse(localStorage.basedata).merchant
									}
								}
								if(parts == 'cate'){
									if(index == 0){
										this.useClassify = JSON.parse(localStorage.basedata).delicacy
									}
								}
								if(parts == 'jour'){
									if(index == 0){
										this.useClassify = JSON.parse(localStorage.basedata).travel
									}
								}
								if(parts == 'work'){
									if(index ==0){
										this.useClassify = JSON.parse(localStorage.basedata).job_address
									}
									if(index == 1){
										this.useClassify  =  JSON.parse(localStorage.basedata).category.filter((item,index)=>{
													return item.title == '工作招聘' && item.id == 3
										})
									}
									if(index == 3){
										this.useClassify = [{title:"不限",id:"0"}]
									}
								}

								if(parts == 'privilege'){
									if(index == 3){
										this.useClassify = [{title:'不限',role:0},{title:'个人',role:1},{title:'商家',role:2},{title:'经纪人',role:3}]
									}
									if(index == 0){
										this.useClassify = JSON.parse(localStorage.basedata).merchant

									}
								}















	                    }else{
	                    // 滑动事件
	                    console.log(document.documentElement.scrollTop)
	                    }
	                        default:
	                            break;
	              
	            }

			
					
			
			
				

			},
			chooseItem(id,e,name){
	           

				 switch (e.type) {
	                case 'touchstart':

	                    this.flag = true;
	                    break;
	                case 'touchmove':
	                    this.flag = false;
	                    break;
	                case 'touchend':
	                    if(this.flag){
	                    	console.log(e.target.dataset.id)
	                    	if(!name || !name.length){
							this.showPart = false
	                    	}
	                        if(this.showPartItem == id){
	                    		this.showPartItem = -1
	                    		this.showPart = true

	                    		return
	                    	}
	                    	this.showPartItem = id
							this.showPart = true

	                    	
	                    	
	                    }else{
	                    // 滑动事件
	                   
	                    }	            
	                        default:
	                            break;
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
			overflow-x: hidden;
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
						    border-top: 0.8vw solid #666;
						    border-right: 0.8vw solid transparent;
						    border-left: 0.8vw solid transparent;
						    border-bottom: 0.8vw solid transparent;
						    position: absolute;
					        top: 4.5vw;
							left: 14vw;
						}
						/*item*/
						>#chooseItem{
							position: absolute;
							z-index: 10;
							width: 40vw;
							text-align: left;
							    box-shadow: 2vw 2vw 3vw -1vw #bbb;
							background-color: #fff;
							>li{
								
								>ul{
									transform: translateX(5vw);
									>li{

									}
								}

							}
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