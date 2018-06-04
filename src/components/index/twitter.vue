<template>
	<div class="twitterWarp">
		<Nav :navList='navList' input="true" :placeholder='placeholder'/>


		<table cellspacing="0">
			<thead>
				<tr>
					<td>发布时间</td>
					<td>账号</td>
					<td>内容</td>

				</tr>
			</thead>

			<tbody>
				<tr v-for='(it,id) in 5'>
					<td>05-25  21:02</td>

					<td>
						<dl>
							<dt><img src="/static/img/ttt.png"></dt>
							<dd >
								<p style="color: #333333;font-weight: bold;margin-bottom: 5px;">Waves Plarform</p>
								<p>@Waves Plarform</p>
							</dd>
						</dl>
					</td>

					<td>
						<p style="margin-bottom: 33px;">”On the Origin of Waves.A look at how Waves could challenge tod</p>
						<p style="
							width: 64px;
							height: 24px;
							background-color: #5060a2;
							border-radius: 12px;
							color: #fff;
							text-align: center;
							line-height: 24px;
							font-size: 12px;
							cursor: pointer;
						">中文翻译</p>
						<p style="margin-top: 19px;">“关于波浪的起源：看看波浪如何挑战今日的主导平台，以太坊”： #WacesPlanform  #Cryptocurrency </p>
					</td>

				</tr>
			</tbody>
		</table>

		<div class="pagess">
			<div class="pages">
					<ul>
						<li><</li>
						<li :class="changePages == id ? 'changePage' : '' " @click='changePage(id)' v-for='(ii,id) in 8'>{{ii}}</li>
						<li>></li>
					</ul>
			</div>
		</div>

	</div>
</template>



<script>
	import Nav from '../nav'
	export default{
		components:{
			Nav
		},
		data(){
			return({
				navList:['推特详情'],
				placeholder:'请输入关键词',
				changePages:0
			})
		},
		methods:{
			changePage(index){
				this.changePages = index
			}
		}
	}
</script>


<style scoped lang="scss">
	.twitterWarp{
		width: 1200px;
		min-height: 100px;
		border: 1px solid #e5e5e5;
		>table{
			width: 100%;
			padding-left: 17px;
			padding-right: 21px;
			font-size: 12px;
			color: #666666;
			>thead{
				
				>tr{
					>td{
						height: 49px;
						font-size: 12px;
						color: #666666;
						border-bottom: 1px solid #e5e5e5;
					}
				}
			}
			>tbody{
				>tr{
					width: 100%;
					height: 220px;
					
					>td{
						vertical-align: top;
						padding-top:20px; 
						border-bottom:1px solid #e5e5e5;
						>dl{
							display: flex;
							>dt{
								width: 36px;
								height: 36px;
								margin-right: 11px;
								>img{
									width: 100%;
									height: 100%;
									margin-top: -2px;
								}
							}
							>dd{
								margin-top: 8px;
							}
						}
					}
				}
			}
		}
		>.pagess{
			width: 100%;
			text-align: center;
			>.pages{
				display: inline-block;
				>ul{
					display: flex;
					>.changePage{
						color: #4277ff;
					}
					>li{
						margin: 0 10px;
						cursor: pointer;
						width: 50px;
						height: 50px;
						text-align: center;
						line-height: 50px;
					}
				}
			}

		}
	}
</style>