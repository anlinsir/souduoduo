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
				<tr v-for='(it,id) in trans' :key='id'>
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

					<td style="width: 70%;word-break: break-all;padding-bottom: 20px;">
						<p id='enssss' style="margin-bottom: 33px;">{{it.en}}</p>
						<p @click='tran(id)' style="
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
						<p id='ssss' style="margin-top: 19px;"></p>
					</td>

				</tr>
			</tbody>
		</table>

		<div class="block" style="width: 100px;margin-left: 450px;">
				<el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
			    layout="prev, pager, next"
			    :total="50" >
			  </el-pagination>
		</div>

	</div>
</template>



<script>
	import { youdao, baidu, google } from 'translation.js'
	import Nav from '../nav'
	import axios from 'axios'
	var appid= '20180611000174906',
		pass = 'uWrBWcwLW6oAZ7Nf0KPW';
	export default{
		components:{
			Nav
		},
		data(){
			return({
				navList:['推特详情'],
				placeholder:'请输入关键词',
				changePages:0,
				currentPage:5,
				trans:[
					{
						en:'Reading enriches the mind.'

					},
					{
						en:'apple'
					},
					{
						en:'information'
					}
				]
				
			})
		},
		methods:{
			handleCurrentChange(val){
				this.currentPage =val
				console.log(val)
			},
			changePage(index){
				this.changePages = index
			},
			tran(id){
				//百度appis  +q + 随机数 + 秘钥 md5加密
				//var enssss = en[id].innerHTML; 
				var md5s =  md5(appid+enssss[id].innerHTML+5+'uWrBWcwLW6oAZ7Nf0KPW');
				$.ajax({
                          type:"get",
                          url:`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${enssss[id].innerHTML}&from=en&to=zh&appid=20180611000174906&salt=5&sign=${md5s}`,
                          dataType:"jsonp",
                          jsonp:"callback",
                          jsonpCallback:"success_jsonpCallback",
                          success:function(json){
                            console.log(json.trans_result[0].dst)
                          
                            ssss[id].innerHTML =  json.trans_result[0].dst
                          }
           	 	})


			}
		},
		mounted(){		

				
		
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