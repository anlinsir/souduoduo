<template>
	<div class="FdetaliWarp">
		<div class="detaliLeft">
			<div class="Top">
				<div class="top">搜多多  > 滚动快讯 > 详情</div>

			</div>


			<div class="Title">
				<div class="title">
					<p class="ttt">百度区块链负责人：百科与区块链结合，从此百科不背锅</p>
					<p class="ooo">
						<span style="display: inline-block;width: 48px;height: 22px;color: #5060a2;border-radius: 12px;border:1px solid;text-align: center;line-height: 22px;margin-right: 12px;">16:54</span>
						<span>2018-05-26 · 星期一</span>
						<span>276次阅读</span>
					</p>
				</div>
			</div>

			<div class="Main">
				<p class="text">百度区块链负责人肖伟今日发朋友圈表示，百科与区块链的结合，虽然简单，但是太经典了！从此百科不背锅。4月27日，肖伟曾表示：百度希望通过区块链建立和社会垂直行业建立一些联盟，通过区块链网络多中心共识以及用户评价确保内容质量，建立公信力，从而保证百度百科的权威性。他认为，愿意被区块链改变的，一定是落后者，而不会是领先者，行业老二老三特别希望用区块链实现反超。
				</p>
				<p class="footerss">
					<span style="float: left;">
						<span @click='duo' style="margin-right: 33px;cursor: pointer;">
							<img style="vertical-align: text-bottom;margin-right: 6px;" src="/static/img/duo.png">
							<span :style="{color : duos == 1 ? '#4277ff' : ''}">看多 152</span>
						</span>

						<span  @click='kong'  style="cursor: pointer;">
							<img style="vertical-align: text-bottom;margin-right: 6px;" src="/static/img/kong.png">
							<span :style="{color : kongs == 1  ? '#4277ff' : ''}" >看空 30</span>
						</span>
					</span>


					<span style="float: right;">
							分享到：
							<img style="vertical-align: middle;margin-right: 6px; cursor: pointer;" src="/static/img/weixin.png">
							<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/weio.png">
							<img style="vertical-align: middle;margin-right: 6px;cursor: pointer;" src="/static/img/qq.png">
					</span>
				</p>
			</div>
		</div>


		<div class="detaliRight"></div>

	</div>
</template>


<script>
	export default{
		data(){
			return({
				duos:0,
				kongs:0
			})
		}
		,
		methods:{
			duo(){
				if(localStorage.dou || localStorage.kong ){
					alert('已选择')
					return
				}
				this.duos = 1
				localStorage.dou = 1
			},
			kong(){
				if(localStorage.kong || localStorage.dou){
					alert('已选择')
					return
				}
				this.kongs = 1
				localStorage.kong = 1
			}
		},
		created(){
			if(localStorage.dou == 1 ){
				this.duos = 1
			}
			if(localStorage.kong == 1 ){
				this.kongs = 1
			}
		}
	}
</script>


<style scoped lang="scss">
	.FdetaliWarp{
		width: 100%;
		min-height: 200px;
		overflow: hidden;
		>.detaliLeft{
			width: 866px;
			min-height: 400px;
			float: left;
			border:1px solid #e5e5e5;
			>.Top{
				width: 100%;
				height: 49px;
				padding-left: 17px;
				padding-right: 19px;
				>.top{
					width: 100%;
					height: 49px;
					font-size: 12px;
					outline-color: #666;
					line-height: 49px;
					border-bottom: 1px solid #e5e5e5;
				}
			}
			>.Title{
				width: 100%;
				height: 102px;
				padding-left: 13px;
				padding-right: 23px;
				>.title{
					width: 100%;
					height: 100px;
					padding-left: 23px;
					border-bottom:1px dashed #e5e5e5;
					>.ttt{
						font-size: 18px;
						margin-top: 27px;
						font-weight: bold;
						margin-bottom: 12px;
					}
					>.ooo{
						font-size: 12px;
						color: #898989;
					}
				}	
			}
			>.Main{
				width: 100%;
				padding-right: 40px;
				padding-left: 45px;
				>p{
					font-size: 12px;
					color: #666;
				}
				>.text{
					margin-top: 27px;
					margin-bottom: 178px;
					line-height: 25px;
				}
				>.footerss{
					overflow: hidden;
					margin-bottom: 27px;
				}

			}
		}
		>.detaliRight{
			float: right;
			width: 320px;
			min-height: 100px;
			border:1px solid #e5e5e5;
		}
	}

</style>