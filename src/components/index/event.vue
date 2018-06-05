<template>
	<div class="evWarp">
		<div class="ETOp">
			<div class="text">
				搜多多  > 币圈事件> 事件列表		
			</div>
			
			<div class="input">
				<input type="text" @keydown.enter='searchs' v-model='search' placeholder="搜索代币名称查找日历">
				<span @click='searchs'></span>
						
			</div>

		</div>



		<div class="EMain">
			<ul class="EMainUl">
				<li class="TimeTitle" >
					<span class="arrLeft" >< </span> 
					<span class="data" >2018年5月</span> 
					<span class="arrRigh" > ></span>
					<span class="timeImg" >
						<img  src="/static/img/time.png">
						<span></span>
					</span>
				</li>


				<li >
					<span class="itemTime" >05-29</span>
					<span class="ItemPoint"></span>
					<span class="itemHeng" :style="{height:100*1.2 + '%'}"></span>
					<span class="itemBox">
						<span class="p1" >
							<img  src="/static/img/1525430993660467.png">

							<span class="ItemBName" >BLT</span>
							<span style="font-size: 16px;">|</span>
							<span class="NameInfo" >菲律宾举办区块链应用经济高峰会</span>
							<button style="margin-left: 15px;width: 74px;height: 26px;border-radius: 10px;background-color: #4277ff;color: #fff;font-size: 12px;border:none;">未开始</button>


						</span><br>

						<span class="MainInfo">自5月29日晚23点14分至6月29日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。自5月29日晚23点14分至6月29日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。</span>
					</span>
				</li>

				<li >
					<span class="itemTime" >05-29</span>
					<span class="ItemPoint"></span>
					<span class="itemHeng" :style="{height:100*1.05 + '%'}"></span>
					<span class="itemBox">
						<span class="p1" >
							<img  src="/static/img/1525430993660467.png">

							<span class="ItemBName" >BLT</span>
							<span style="font-size: 16px;">|</span>
							<span class="NameInfo" >菲律宾举办区块链应用经济高峰会</span>
							<button style="margin-left: 15px;width: 74px;height: 26px;border:1px solid #4277ff;border-radius: 10px;background-color: #fff;color: #4277ff;font-size: 12px;">进行中</button>


						</span><br>

						<span class="MainInfo">自5月29日晚23点14分至6月29日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。自5月29日晚23点14分至6月29日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。</span>
					</span>
				</li>

				<li >
					<span class="itemTime" >05-29</span>
					<span class="ItemPoint"></span>
					<span class="itemHeng" :style="{height:100*1.2 + '%'}"></span>
					<span class="itemBox">
						<span class="p1" >
							<img  src="/static/img/1525430993660467.png">

							<span class="ItemBName" >BLT</span>
							<span style="font-size: 16px;">|</span>
							<span class="NameInfo" >菲律宾举办区块链应用经济高峰会</span>
							<button style="margin-left: 15px;width: 74px;height: 26px;border:1px solid #aaa;border-radius: 10px;background-color: #fff;color: #aaa;font-size: 12px;">已结束</button>

						</span><br>

						<span class="MainInfo">自5月2ayke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playke日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。自5月29日晚23点14分至6月29日晚23点14分，Playkey将以250万美元的价格回购200万的PKT，回购价格每PKT不超过1.24美元。</span>
					</span>
				</li>





			</ul>
		</div>





	</div>
</template>


<script >
	export default{
		data(){
			return({
				search:''
			})
		},
		methods:{
			searchs(e){
				this.search = e.target.value
				alert(this.search)
			}
		}
	}
</script>

<style scoped lang="scss">
	.evWarp{
		width: 100%;
		min-height: 100px;
		border: 1px solid #e5e5e5;
		overflow: hidden;
		>.ETOp{
			width: 100%;
				height: 56px;

			padding:0 21px 0 17px ;
			>.text{
				width: 50%;
				border-bottom:1px solid #e5e5e5;
				height: 56px;
				font-size: 12px;
				color: #666;
				line-height: 56px;
				float: left;
			}
			>.input{
				width: 50%;
				height: 56px;float: right;
				border-bottom:1px solid #e5e5e5;
				position: relative;
				>input{
					width: 258px;
					height: 34px;
					border:1px solid #e5e5e5;
					border-radius: 20px;
					padding-left: 20px;
					background-color: #fff;
					float: right;
					margin-top: 12px;
					
				}
				>span{
					background-image: url('/static/img/search.png');
					display: inline-block;
					width: 18px;
					height: 18px;
					position: absolute;
					background-repeat: no-repeat;
					background-position: center;
					top:20px;
					right: 10px;
					cursor: pointer;
				}
			}
		}
		>.EMain{
			width: 100%;
			min-height: 100px;
			padding-left: 17px;
			padding-right: 34px;
			padding-top: 30px; 
			>.EMainUl{
				width: 100%;
				min-height:100px;
				>.TimeTitle{
					margin-bottom: 40px;
					>.arrLeft,>.arrRigh{
						font-size: 12px;color: #666;font-weight: bold;cursor: pointer;
					}
					>.data{
						font-size: 20px;font-weight: bold;color: #333;cursor: pointer;display: inline-block;width: 109px;text-align: center;margin: 0 10px;
					}
					>.timeImg{
						position: relative;
						>img{
							vertical-align: middle;margin-left: 22px;
						}
						>span{
							position: absolute;top: 21px;height: 36px;border: 1px dashed rgb(229, 229, 229);left: 34px;z-index: -1;
						}
					}
				}
				>li:not(.TimeTitle){
					margin-left: 123px;
					font-size: 12px;
					position: relative;
					color: #666;
					margin-bottom: 47px;
					>.itemTime{
						margin-right: 28px;display: inline-block;vertical-align: top;
					}
					>.ItemPoint{
						display: inline-block;width: 10px;height: 10px;background-color: #4277ff;border-radius: 50%;display: inline-block;vertical-align: top;
					}
					>.itemHeng{
						position: absolute;top: 10px;width: 1px;height: 50px;border:1px dashed #e5e5e5;left: 66px;height: 100%;
					}
					>.itemBox{
						width: 928px;min-height: 123px;border:1px solid #e5e5e5;display:inline-block;margin-left: 18px;transform: translateY(-26px);padding-top: 16px;padding-left: 23px;border-radius: 4px;padding-right: 65px;
						>.p1{
							display: inline-block;
							>img{
								vertical-align: middle;margin-right: 5px;
							}
							>.ItemBName{
								margin-right: 30px;font-size: 15px;color: #333;font-weight: bold;
							}
							>.NameInfo{
								margin-left: 20px;font-size: 15px;color: #333;font-weight: bold;
							}
						}
						>.MainInfo{
							margin-left: 123px;margin-top: 20px;display: inline-block;line-height: 24px;
						}
					}

				}
				
			}
		}
	}

</style>