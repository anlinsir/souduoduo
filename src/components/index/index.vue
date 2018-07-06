<template>
	<div>
		<div class="warp">
			<div class="indexLeft">
				<div class="indexLeftTopChoose">
					<ul>
						<li @click='choosed(index)' :class="active == index ? 'active' : '' "  v-for='(item,index) in nav' :key='index'>{{item}}</li>					

					</ul>

					<div class="TopChooseRight">
						<div  @click='ShowmoneyItem'  class="yuan">
							<span :title='money' style="display: inline-block;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{money}}</span>
						<transition name="custom-classes-transition"

					 enter-active-class="animated flipInX"
    					leave-active-class="animated flipOutX">

							<div  v-if='moneyShow' class="yuanItem">
								<p @click='choosemoneyItem(index,item.value,item.symbol)' v-for='(item,index) in moneyList'>{{item.cn_name}}{{item.code}}</p>
							</div>
						</transition>

						</div>
						<div class="flesh">
							<div class="ro">
								<img src="/static/img/refresh.png">	
							</div>
							
						</div>
					<!-- 	<ul> 
							<li @click='changeActives(index)' :class="actives == index ? 'actives' : '' "  v-for='(item,index) in 5'>{{item}}</li>
						</ul> -->

						<div class="block" style="width: 50px; position: absolute;top: 4px;left: 51px;">
						  <el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style="width: 100px;"
						    layout="prev, pager, next"
						    :total="total"
						    
						     >
						     <!-- pager-count='3' :pager-count="total_page"  -->
						  </el-pagination>
						</div>
					</div>


				</div>

				<keep-alive include="test-keep-alive">
				<div class="indexLeftBomTable">
					<div class="jiazaizh" v-show='!datatrue'>
						<svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
							    <circle fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" transform="rotate(14.4021 50 50)">
							      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
							  </circle>
							  <circle fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39" transform="rotate(-14.4021 50 50)">
							      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
							  </circle>
							  <g fill="rgba(0,0,0,0.6)">
							  <rect x="30" y="35" width="5" height="30" transform="translate(0 2.99941)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform>
							  </rect>
							  <rect x="40" y="35" width="5" height="30" transform="translate(0 4.99941)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform>
							  </rect>
							  <rect x="50" y="35" width="5" height="30" transform="translate(0 3.00059)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
							  </rect>
							  <rect x="60" y="35" width="5" height="30" transform="translate(0 1.00059)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform>
							  </rect>
							  <rect x="70" y="35" width="5" height="30" transform="translate(0 -0.999405)">
							    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform>
							  </rect>
							  </g>
							</svg>

					</div>

					<table class="dataTable" v-show='datatrue && active == 0 || (active == 1 && logintrue && datatrue)' >
						<thead>
							<tr>
								<td >
								<span style="margin-right: 5px;">#</span>
								
							 	</td>
							 	<td >
								<span style="margin-right: 5px;">名称</span>
								
							 	</td>
							 	<td >
								<span style="margin-right: 5px;">流通市值</span>
								
							 	</td>
							 	<td @click='paixun(0)' style="cursor: pointer;">
								<span style="margin-right: 5px;">价格</span>
								<span v-if='!pricepaixun' class="auswahl" style="top: 0px;left: 28px;" >▲</span>
								<span v-if='pricepaixun'  class="auswahl" style="top: 0px;left: 28px;" >▼</span>
							 	</td>
				
							 	<td @click='paixun(1)' >
								<span style="margin-right: 5px;">流通数量</span>
								<span  v-if='!liutongshuliangpaixun' class="auswahl" style="top: 0px;    left: 51px;" >▲</span>
								<span  v-if='liutongshuliangpaixun' class="auswahl" style="top: 0px;    left: 51px;" >▼</span>
							 	</td>
							 	<td @click='paixun(2)' style="cursor: pointer;">
								<span style="margin-right: 5px;">成交额(24h)</span>
								<span v-if='!volume24h'  class="auswahl" style="top: 0px;    left: 65px;" >▲</span>
								<span v-if='volume24h' class="auswahl" style="top: 0px;    left: 65px;" >▼</span>
							 	</td>
							 	<td @click='paixun(3)' style="cursor: pointer;">
								<span style="margin-right: 5px;">涨幅(24h)</span>
								<span v-if='!percent_change24h'  class="auswahl" style="top: 0px;left: 55px;" >▲</span>
								<span v-if='percent_change24h' class="auswahl" style="top: 0px;left: 55px;" >▼</span>
							 	</td>
							 	<td >
								<span style="margin-right: 5px;">价格趋势(7D)</span>
								
							 	</td>
							</tr>
						</thead>
						<tbody>
							<tr   @click='toIconDetali(item.slug,item.symbol)' v-for='(item,index) in cionList' :key='index'>
								<td class="td0">{{((currentPage-1)*50) + (index)+1}}</td>
								<td class="name td1" ><img style="width: 15px;transform: translateY(-1px);" :src="item.logo" /><span>{{item.symbol}}  {{item.cn_name ? '-' + item.cn_name : ''}}</span></td>
								<td class="td2">
									{{moneySymbol + ((Number(item.market_cap)*moneyrage)/100000000).toFixed(2) }}亿
								</td>

								<td class="td3">
									{{ moneySymbol + (Number(item.price)*moneyrage).toFixed(4)}}
								</td>

								<td class="td4">{{item.circulating_supply ? (Number(item.circulating_supply)/10000).toFixed(2) : '?'}}万</td>
								<td class="td5">
									{{item.volume_24h ?  moneySymbol + ((Number(item.volume_24h)*moneyrage)/10000).toFixed(2) : '?'}}万
									</td>
								<td class="td6" :style="{color:item.percent_change_24h >=0 ? '#3ba316' : '#e40202'}">{{item.percent_change_24h ? item.percent_change_24h : '?'}}%</td>
								<td class="td7">
									<!-- <svg width='80' height='20' style='margin-top: 20px;'>
										 <polyline points="0 1 20 15" style="fill:none;stroke:#3f7cdc;stroke-width:1" />
									</svg> -->
									<peity :type="'line'" :options=" { width: 80, height: 15, fill: '#fff', strokeWidth: 1, min: 99999, stroke: '#0291d6' }" :data="item.price_7d_line"></peity>
								</td>


							</tr>
							
						</tbody>

					</table>
					<div class="loginFalse" v-if='active == 1 && !logintrue' v-show='(active == 1 && !logintrue)'>
						<div class="box">
							<span>登陆后可查看自选</span><br>
							<button class="lo" @click='toLogin(0)'>立即登陆</button>
							<button class="re" @click='toLogin(1)'>立即注册</button>

						</div>
					</div>
					<div v-show='datatrue && active == 0 || (active == 1 && logintrue && datatrue)' class="pagesW" style="text-align: center;width:100%;">
						<div class="block" style="display: inline-block;width: 100%;text-align: center;">
						  <el-pagination :current-page="currentPage" @current-change="handleCurrentChange" style=""
						    layout="prev, pager, next"
						    :total="total" >
						  </el-pagination>
						</div>
					</div>

				</div>
				</keep-alive>
			</div>



			<div  class="indexRight">
				<div class="newDeal">
					<div class="newDealTitle">
						<p @click='ann'>
							<span>交易所最新公告</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul>
						<li v-for='(item,index) in newDeal' :key='index'>
							<img :src="item.img">
							<span>{{item.text}}</span>
							<time>{{item.time}}</time>
						</li>
					</ul>
				</div>



				<div @click='Event' class="event">
					<p><img src="/static/img/calendar.png">币圈事件</p>
					<span class="point pointLeft"></span>
					<span class="point pointRitgh"></span>
				</div>



				<div class="scrollExpress">
					<div @click='toFalsh' class="scrollExpressTitle">
						<p>
							<span>滚动快讯</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="scrollExpressInfo">
						<dl v-for='(item,index) in scrollExpressInfo' :key='index'>
							<dt>
								<span class="time"   :style="{color:item.iss ? '#f86b6b' : '', border:item.iss ? '1px solid #f86b6b' : ''}">{{item.time}}</span>
								<div class="line"></div>
							</dt>
							<dd>
								<p>{{item.text}}</p>
							</dd>
						</dl>
					</div>

				</div>



				<div class="rankingList">
					<div class="rankingListTitle">
						<p>
							<span>成交量排行榜</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul class="rankingListChoose">
						<li @click='changeRanChoose(index)' :class="rankingActives == index ? 'rankingActives' : 'rankingActives1' "  :key='index' v-for='(item,index) in rankingListChoose'>
							{{item}}
						</li>
					</ul>

					<table v-show='rankingActives == 0'>
						<thead>
							<tr>
								<td>排名 </td>
								<td>名称</td>
								<td>成交额</td>

							</tr>
						</thead>
						<tbody>
							<tr  class="tbr" v-for='(item,index) in rankvolumeList' :key='index'>
								<td :style="{paddingLeft: index < 4 ?  '' : '35px' , marginLeft:item < 4 ?  '0' : '0px'}"><span v-if='index<4' style="width: 20px;
								height: 20px;
								background-color: #fba73e;
								color: #fff;
								text-align: center;
								line-height:20px; 
								display: inline-block;
								">{{index+1}}</span>{{index < 4 ? '' : index+1 }}</td>
								<td style="color: #4277ff"><img style="width: 15px;transform: translateY(3px) translateX(-5px);" :src="item.logo">{{item.symbol}}-{{item.cn_name ? item.cn_name : item.name}}</td>
								<td>{{item.volume_24h?(Number(item.volume_24h)/10000).toFixed(2) + '万' : '??'}}</td>
								

							</tr>
						</tbody>	
					</table>


					<table v-show='rankingActives == 1'>
						<thead>
							<tr >
								<td>排名 </td>
								<td>名称</td>
								<td>成交量</td>

							</tr>
						</thead>
						<tbody>
							<tr   class="tbr" v-for='(item,index) in rankvolumeListex' :key='index'>
								<td :style="{paddingLeft: index < 4 ?  '40px' : '45px' , marginLeft:item < 4 ?  '0' : '-6px'}"><span v-if='index<4' style="width: 20px;
								height: 20px;
								background-color: #fba73e;
								color: #fff;
								text-align: center;
								line-height:20px; 
								display: inline-block;
								">{{index+1}}</span>{{index < 4 ? '' : index+1 }}</td>
								<td style="color: #4277ff"><img style="width: 15px;transform: translateY(3px) translateX(-5px);" :src="item.logo">{{item.name}}</td>
								<td>{{item.volume_24h?(Number(item.volume_24h)/10000).toFixed(2) + '万': '??'}}</td>
								

							</tr>
						</tbody>	
					</table>


				</div>




				<div class="rOf">
					<div class="rOfTitle">
						<p>
							<span @click='rofChoose(index)' v-for='(item,index) in rof' :key='index' :class="rofActive == index ? 'rofActive' : '' ">{{item}}<img @click='toRank' style="cursor: pointer;" v-if='index == 1' src="/static/img/right_arrow.png"></span>
							
						</p>
					</div>	

					<ul class="rofData">
							<li @click='rofChooses(index)' v-for='(item,index) in rofData' :key='index' :class="rofActives == index ? 'rofActives' : '' ">{{item}}</li>
						
					</ul>

					<ul class="rofDatadetails">
						<li class="head"><span v-for='(item,index) in rofdetalislist' :key='index'>{{item}}</span></li>
						<li class="body" v-for='(items,index) in rofList' style="text-align: left;">
							<span style='width: 20px;height: 20px;transform: translateY(6px);display: inline-block;text-align: center;line-height: 20px;margin-left: 10px;'><span v-if='index < 4' style='width: 20px;height: 20px;background-color: #fba73e;color: #FFF;display: inline-block;text-align: center;line-height: 20px;transform: translateY(0px);'>{{index+1}}</span>{{index >= 4 ? index+1 : ''}}</span>
							<span style="width: 70px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"><img style="width: 15px;transform: translateX(-0px) translateY(3px);margin-right: 4px" :src="items.logo">{{items.symbol}}-{{items.cn_name?items.cn_name:items.name}}</span>
							<span style="width: 50px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${{Number(items.price).toFixed(4)}}</span>
							<span style="width: 30px" :style="{color: parseFloat(items.rises) <= 0 ? 'rgb(59, 163, 22)' : 'rgb(59, 163, 22)' }">{{items.percent_change_1h ? items.percent_change_1h : '??'}}</span>

							
						</li>
					</ul>

				</div>



				<div class="twitterMessages">
					<div class="twitterMessagesTitle">
						<p @click='toTwiter'>
							<span>推特消息</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="message">
						<dl>
							<dt><img src="/static/img/"></dt>
							<dd>
								<p style="margin-bottom: 20px;">
									<span style="font-weight: bold;margin-bottom: 16px;display: inline-block;">Vitalik “Not giving away ETH”Buterin</span>
									<span style="line-height: 20px;">OTOH the foundation NOT having any of its ETH in a validator noOTOH the foundation NOT having any of its ETH in a validator noOTOH the foundation NOT having any of its ETH in a validator no</span>
								</p>
								<p style="padding-right: 15px;">
									<span style="display: block;margin-bottom: 11px;color: #9c9b9b;">中文翻译</span>
									<span style="line-height: 20px;">OTOH在验证者节点中没有任何ETH的的基础创造了相反的激励，并且最重要的是它拒绝获得“实地”知识。也许最好的基础是复制整个社区</span>
								</p>
							</dd>
						</dl>
					</div>
	

				</div>


				<div class="miningData">
					<div class="miningDataTitle">
						<p>
							<span>挖矿数据</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<ul class="minidataChoose">
						<li @click='minidatachange(index)' :class="minidataAvtive == index ? 'minidataAvtive' : '' " v-for='(item,index) in minidataChoose'>
							{{item}}
						</li>
					</ul>


					<ul class="data">
						<li v-for='(item,index) in data' :key='index'>
							<span class="left">{{item.left}}</span>
							<span class="right" :style="{color:item.color ? item.color : ''}">{{item.right}}</span>
							<span class="right" v-if='item.input'><input  type="number"  style="width: 100px;background-color: #e5e5e5;border:none;height: 30px;text-align: right;" />TH/s</span>	
						</li>

					</ul>


				</div>





				<div class="market">
					<div @click='toConcept' class="marketTitle">
						<p>
							<span>概念行情</span>
							<img src="/static/img/right_arrow.png">
						</p>
					</div>

					<div class="datar">
						<span v-for='(i,d) in datar'>{{i}}</span>
					</div>

				</div>


			</div>

		</div>




	</div>
</template>


<script>
	import axios from 'axios'
	import Peity from 'vue-peity'
	var flag = true
	export default{
		data(){
			return({
				logintrue:true,
				  pieData: '1, 2, 3, 2,2',
				nav:['货币','关注'],
				active:0,
				actives:0,
				rankingActives:0,
			
				tbody:[
					{
						id:1,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'

					},
					{
						id:2,
						img:'/static/img/eth.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:3,
						img:'/static/img/xrp.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:4,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:5,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:6,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					},
					{
						id:7,
						img:'/static/img/btc.png',
						name:'BTC-比特币',
						circulationVale:'¥8,377亿',
						price:'¥49,128',
						sum:'1,705万',
						transaction:'¥4,208,503万',
						rises:'-2.75%',
						tendency:'0 5 2 4 4 8 6 2 8 10 10 3'
					}
					
				],
				newDeal:[
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg2.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
					,
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					},
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
					,
					{
						img:'/static/img/newDealImg1.png',
						text:"火币Pro关于对ERC20智能合约",
						time:"16分钟前"
					}
				],
				scrollExpressInfo:[
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现'
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现',
						iss:true
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现',
						iss:true
					},
					{
						time:'16:54',
						text:'EOS WTZ王团长：EOS的长期价值未来三年会呈现'
					}
				],
				rankingListChoose:['币种','交易所'],
				rof:['涨幅','跌幅'],
				rofData:['1小时','24小时','一周'],
				rofActive:0,
				rofActives:0,
				rofdetalislist:['排名','名称','价格','涨幅'],
				minidataChoose:['比特币','莱特币'],
				minidataAvtive:0,
				data:[
					{
						left:'预计产量减半时间',
						right:'2020-05-26'
					},
					{
						left:'产量减半倒计时',
						right:'两年后'
					}
					,
					{
						left:'全网算力',
						right:'30865PH/s'
					},
					{
						left:'目前难度',
						right:'30865PH/s'
					},
					{
						left:'下次难度',
						right:'30865PH/s'
					},
					{
						left:'当前难度(1T*24h)',
						right:'30865PH/s'
					},
					{
						left:'下次难度(1T*24h)',
						right:'30865PH/s'
					},
					{
						left:'调整难度时间',
						right:'30865PH/s'
					},
					{
						left:'下次难度增幅',
						right:'30865PH/s'
					},
					{
						left:'已开采总数',
						right:'30865PH/s'
					},
					{
						left:'未开采总数',
						right:'30865PH/s'
					},
					{
						left:'您的算力',
						input:20
					},
					{
						left:'计算日收益',
						right:'30865PH/s',
						color:'#4277ff'
					}
					
				],
				datar:['数据存储','匿名货币','公正防伪','去中心化交易所','比特币山寨币','侧链概念','支付概念','平台币','资产交易','数据经济'],
				money:'人民币CNY',
				moneyid:0,
				moneyrage:1,
				moneySymbol:'$',
				moneyList:[],
				moneyShow:false,
				currentPage:1,
				total:1,
				total_page:3,
				cionList:[],
				rofList:[],
				roforderType:'asc',
				roforderBy:'percent_change_1h',
				rankvolumeList:[],
				rankvolumeListex:[],
				datatrue:false,
				pricepaixun:true,
				liutongshuliangpaixun:true,
				volume24h:true,
				percent_change24h:true

			})
		}
		,
		methods:{
			paixun(id){
				if(flag == false) {return}
					flag = false
				

				switch (id){
					case 0:
					this.datatrue = false
						this.pricepaixun = !this.pricepaixun
						if(!this.pricepaixun){
							this.liutongshuliangpaixu=true
							this.volume24h=true
							this.percent_change24h=true
						}
						

						
						axios.get(`${href}/api/currencie/list?&order_by=price&take=50`)
							.then((res)=>{
								this.cionList = res.data.data.list
								this.datatrue = true
								flag = true

							})
						break;
					case 1:
					this.datatrue = false

						this.liutongshuliangpaixun = !this.liutongshuliangpaixun
						if(!this.liutongshuliangpaixun){
							this.pricepaixun=true
							this.volume24h=true
							this.percent_change24h=true
						}
						this.datatrue = false
							axios.get(`${href}/api/currencie/list?&order_by=circulating_supply&take=50`)
							.then((res)=>{
								this.cionList = res.data.data.list
								this.datatrue = true
								flag = true

							})
						break;
					case 2:
					this.datatrue = false

						this.volume24h = !this.volume24h
						if(!this.volume24h){
							this.pricepaixun=true
							this.liutongshuliangpaixun=true
							this.percent_change24h=true
						}
						axios.get(`${href}/api/currencie/list?&order_by=volume_24h&take=50`)
							.then((res)=>{
								this.cionList = res.data.data.list
								this.datatrue = true
								flag = true

							})
						break;
					case 3:
					this.datatrue = false

						this.percent_change24h = !this.percent_change24h
						if(!this.volume24h){
							this.pricepaixun=true
							this.liutongshuliangpaixun=true
							this.volume24h=true
						
						}
						axios.get(`${href}/api/currencie/list?&order_by=percent_change_24h&take=50`)
							.then((res)=>{
								this.cionList = res.data.data.list
								this.datatrue = true
								flag = true

							})

								break;
				}

			},
			toLogin(){
				this.$router.push('/login')
			},

			toRank(){
				this.$router.push('/index/ranking')
			},
			handleCurrentChange(val){
				this.currentPage =val
				this.datatrue = false
				document.documentElement.scrollTop = 0
				document.body.scrollTop = 0
				var ode = this.pricepaixun == false ? 'price': this.liutongshuliangpaixun == false ? 'circulating_supply' : this.volume24h == false ? 'volume_24h'  : this.percent_change24h ==false?  'percent_change_24h': ''			
				
				axios.get(`${href}/api/currencie/list?&skip=${(Number(val)-1)*50}&take=50&order_by=${ode}`)
				.then((res)=>{
					this.cionList = res.data.data.list
					this.datatrue = true


				})
			},
			toIconDetali(sug,syb){
				this.$router.push({path:`/index/cion/${sug}`,query:{symbol:syb}})
			},
			choosemoneyItem(id,value,symbol){
				this.moneyid = id
				this.money = this.moneyList[id].cn_name + this.moneyList[id].code
				this.moneyrage = Number(value)
				this.moneySymbol =symbol 

				localStorage.moneyrage = Number(value)
				localStorage.moneySymbol = symbol 
				console.log(localStorage.moneySymbol,localStorage.moneyrage)

				if(this.moneyShow){
					this.moneyShow =true
					return
				}
				this.moneyShow = false

			},
			ShowmoneyItem(){
				if(this.moneyShow){
					this.moneyShow =false
					return
				}
				this.moneyShow = true

			},
			choosed(index){
				this.active = index	
				switch (index){
					case 0:
						
							this.cionList = JSON.parse(localStorage.cionList1)
							this.total = Number(localStorage.cionList1sum)
						
						break;
					case 1 :
					if(this.logintrue){
						this.datatrue = false
						axios.get(`${href}/api/currencie/list?&skip=${0}&take=50`)
							.then((res)=>{
								var aa = []
								aa.push(res.data.data.list[0])
								aa.push(res.data.data.list[1])
								this.cionList = aa

								this.total = (this.cionList.length)*10
								this.datatrue = true
						})
						break;
					}else {
						this.datatrue = true
					}
				}		
			},
			// changeActives(index){
			// 	this.actives = index
			// },
			changeRanChoose(index){
				this.rankingActives = index
				console.log(this.rankingActives)
				if(this.rankingActives == 0){
					axios.get(`${href}/api/currencie/list?&order_by=volume_24h&take=7&order_type=desc`)
			 			.then((res)=>{
			 				console.table(res.data.data.list)
			 				this.rankvolumeList = res.data.data.list
			 				
			 		})

				}else if(this.rankingActives == 1){
					axios.get(`${href}/api/exchange/list?&order_by=volume_24h&take=7&order_type=desc`)
						.then((res)=>{
			 				this.rankvolumeListex = res.data.data.list

						})
				}
			},
			rofChoose(index){
				this.rofActive = index

				if(this.rofActive == 0){
					this.roforderType = 'desc'
					axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=${this.roforderType}&order_by=${this.roforderBy}`)//侧边栏涨跌幅
			 			.then((res)=>{
			 				console.log(res.data.data)
			 				this.rofList = res.data.data.list
			 		})
				}else if(this.rofActive == 1){
					this.roforderType = 'asc'
					axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=${this.roforderType}&order_by=${this.roforderBy}`)//侧边栏涨跌幅
			 			.then((res)=>{
			 				console.log(res.data.data)
			 				this.rofList = res.data.data.list
			 		})
				}

			},
			rofChooses(index){
				this.rofActives = index

				if(this.rofActives == 0){
					this.roforderBy = 'percent_change_1h'
						axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=${this.roforderType}&order_by=${this.roforderBy}`)//侧边栏涨跌幅
				 			.then((res)=>{
				 				console.log(res.data.data)
				 				this.rofList = res.data.data.list
				 		})
				}else if(this.rofActives == 1){
					this.roforderBy = 'percent_change_24h'
						axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=${this.roforderType}&order_by=${this.roforderBy}`)//侧边栏涨跌幅
			 			.then((res)=>{
			 				console.log(res.data.data)
			 				this.rofList = res.data.data.list
			 		})

				}else if(this.rofActives == 2){
					this.roforderBy = 'percent_change_7d'

					axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=${this.roforderType}&order_by=${this.roforderBy}`)//侧边栏涨跌幅
			 			.then((res)=>{
			 				console.log(res.data.data)
			 				this.rofList = res.data.data.list
			 		})
				}

			},
			minidatachange(index){
				this.minidataAvtive = index
			},
			toTwiter(){
				this.$router.push('/index/twitter')
			},
			ann(){
				this.$router.push('/index/announcement')
			},
			Event(){
				this.$router.push('/index/event')
			}
			,
			toConcept(){
				this.$router.push('/index/concept')

			},
			toFalsh(){
				this.$router.push('/index/flash')
			}
			

		},
		 components: {
    Peity
  },
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
			if(localStorage.token && localStorage.login){
				this.logintrue = true
				axios.get(`${href}//api/user/info?&_api_token=${localStorage.token}`)
					.then((res)=>{
						console.log(res.data.data)
						localStorage.userInfoIToken = JSON.stringify(res.data.data)
				})
			}else{
				this.logintrue = false

			}

			var cishu = 0;
			 var cishu1 = 0
			 window.onscroll = ()=>{
			 	if((document.documentElement.scrollTop >= 270 || document.body.scrollTop>=270) && cishu1 == 0){
			 		console.log('ftughy')
			 		axios.get(`${href}/api/currencie/list?&order_by=volume_24h&take=7&order_type=desc`)
			 			.then((res)=>{
			 				console.table(res.data.data.list)
			 				this.rankvolumeList = res.data.data.list
			 				
			 			})
			 		cishu1 = 1
			 	}
			 	if((document.documentElement.scrollTop >=650   ||	document.body.scrollTop>=650) && cishu == 0){
			 		axios.get(`${href}/api/currencie/list?&order_by=percent_change_1h&take=7&order_type=asc&order_type=desc`)//侧边栏涨跌幅
			 			.then((res)=>{
			 				this.rofList = res.data.data.list
			 			})
			 		cishu = 1
			 	}
			 }



			if(!localStorage.Rate){
			         axios.get(`${href}/api/exchange/rate`)
			              .then((res)=>{
			                localStorage.Rate = JSON.stringify(res.data.data)
			                this.moneyList.push(JSON.parse(localStorage.Rate).CNY)
			                this.moneyList.push(JSON.parse(localStorage.Rate).USD)
							
							this.moneyList.push(JSON.parse(localStorage.Rate).JPY)
							this.moneyList.push(JSON.parse(localStorage.Rate).EUR)
							this.moneyrage = JSON.parse(localStorage.Rate).CNY.value
							this.moneySymbol = JSON.parse(localStorage.Rate).CNY.symbol
							localStorage.moneyrage = this.moneyrage
							localStorage.moneySymbol = this.moneySymbol


			       })
   			}else{
   				
							this.moneyList.push(JSON.parse(localStorage.Rate).CNY)
							this.moneyList.push(JSON.parse(localStorage.Rate).USD)
							this.moneyList.push(JSON.parse(localStorage.Rate).JPY)
							this.moneyList.push(JSON.parse(localStorage.Rate).EUR)
							this.moneyrage = JSON.parse(localStorage.Rate).CNY.value
							this.moneySymbol = JSON.parse(localStorage.Rate).CNY.symbol
							localStorage.moneyrage = this.moneyrage
							localStorage.moneySymbol = this.moneySymbol
   			}
			
		
			
			axios.get(`${href}/api/currencie/list?&skip=${0}&take=50&order_by=rank&order_type=asc`)
				.then((res)=>{
					this.cionList = res.data.data.list
					localStorage.cionList1 = JSON.stringify(res.data.data.list)
					localStorage.cionList1sum = Math.ceil(Number(res.data.data.count)/50)*10
					this.total = Math.ceil(Number(res.data.data.count)/50)*10
					this.datatrue = true

				})
			
		}
	}
</script>


<style lang="scss" scoped>

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}










	.warp{
		overflow: hidden;
		>.indexLeft{
			width: 866px;
			float: left;
			min-height:800px;
			>.indexLeftTopChoose{
				width: 866px;
				height: 58px;
				background-color: #f2f2f2;
				>ul{
					width: 264px;
					height: 58px;
					margin-left: 1px;
					float: left;
					display: flex;
					justify-content: space-between;
					>.active{background-color: #fff;border-top:2px solid #4277ff;color: #4277ff;}
					>li{
						width: 50%;
						height:58px;
						text-align: center;
						line-height: 58px;
						font-size: 16px;
						color: #333333;
					}
				}
				>.TopChooseRight{
					width: 296px;
					position: relative;
					height: 37px;
					float: right;

					margin-top: 9px;
					margin-right: 15px;
					>.yuan{
						position: absolute;
						top: 5px;
						width: 90px;
						border-radius: 5px;
						background-color: #fff;
						padding: 0 20px 0 10px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						left: -100px;
						font-size: 12px;
						color: #666;
						cursor: pointer;
						>.yuanItem{
							position: absolute;
							top:30px;
							left:0px;
							z-index: 50;
							width: 90px;
							min-height: 20px;
							border:1px solid #e5e5e5;
							background-color: #fff;
							text-align: center;
							>p{
								height:20px;
								line-height: 20px;
								border-radius: 20px;
								display: inline-block;
								width: 90px;

							}
							>p:hover{
								background-color: #e5e5e5;
							}
						}
					}

					>.yuan::after{
						content: '';
						border:3px solid;
						position: absolute;
						top: 13px;
						right: 8px;
						border-top: 4px solid #000;
						border-right: 4px solid transparent;
						border-left: 4px solid transparent;
						border-bottom: 4px solid transparent;

					}
					>.flesh{
						width: 30px;
						height: 30px;
						cursor: pointer;

						text-align: center;line-height: 37px;
						margin-right: 9px;
						background-color: #fff;
						transform: translateX(5px) translateY(5px);
						>.ro{
							width: 30px;
							height: 30px;
							transition: all 1s;

						}
						img{
							transform: translateY(-3px);
							transition: all 1s;
						}
					}
					>.flesh:hover .ro{
						transform:rotate(360deg);
						-webkit-transform-origin: center ;
						transform-origin: center ;	
					}
					>ul{
						width: 241px;
						height: 37px;
						background-color: #fff;
						float: right;
						transform: translateY(-37px);
						display: flex;
						justify-content: center;
						line-height: 37px;
						>.actives{color: #4277ff;}
						>li{
							margin-right: 22px;
							cursor: pointer;
						}
					}
				}
			}
			>.indexLeftBomTable{
				width: 866px;
				min-height: 500px;
				padding: 0 31px 0 17px;
				border:1px solid #e5e5e5;
				position: relative;				
				>.loginFalse{
					position: absolute;
					top:0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: #fff;
					>.box{
						width: 500px;
						padding-top: 90px;
						height: 300px;
						position: absolute;top:0;
						left: 0;
						background-color: #eee;
						right: 0;
						bottom:0;
						margin: auto;
						font-size: 14px;
						color: #333;
						box-shadow: 0 0 10px 10px #fff inset;
						text-align: center;
						>button{
							width: 80px;
							height: 30px;
							border:none;
							margin-right: 30px;
							margin-left: 30px;
							text-align: center;
							line-height: 30px;
							color: #fff;
							font-size: 14px;
							margin-top: 50px;
							border-radius: 10px;
							cursor: pointer;

						}
						>.lo{background-color: #2599f2}
						>.re{background-color: #464680}

					}
				}
				>.jiazaizh{
					position: absolute;
					width: 100%;
					height: 100%;
					background-color: rgba(255,255,255,0.6);
					z-index: 2;
					>svg{
						width: 50px;
						height: 50px;
						position: absolute;
						top:0;
						left: 0;
						bottom: 0;
						right: 0;
						margin: auto;
					}
				}
				>.dataTable{
					width: 100%;
					min-height: 300px;
					>thead{
						>tr{
							display: flex;
							border-bottom:1px solid #eeeeee;
							justify-content: space-between;
							>td{
								line-height: 50px;
								height: 50px;
								font-size: 12px;
								color: #666666;
								text-align: left;
								position: relative;
								>.auswahl{
									position: absolute;
									font-size: 12px;

								}
							}
							>.th0{
								width: 40px;
							}
							>.th1{
								width: 140px;
							}
							>.th2{
								width: 100px;
							}
							>.th3{
								width: 90px;
							}
							>.th4{
								width: 116px;
							}
							>.th5{
								width: 118px;
							}
							>.th6{
								width: 90px;
							}
							>.th7{
								width: 81px;
							}
							

						}
					}
					>tbody{
						>:nth-last-child(1){
							border-bottom:1px solid #e5e5e5;
						}
						>tr{
							display: flex;
							font-size: 12px;
							color: #666666;
							justify-content:space-between;
							cursor: pointer;

							>td{
								/*margin-right: 45px;*/
								height: 55px;
								line-height: 55px;
								text-align: left;
								cursor: pointer;
							}
							>.td0{
								width: 40px;
							}
							>.td1{
								width: 140px;
							}
							>.td2{
								width: 100px;
							}
							>.td3{
								width: 90px;
							}
							>.td4{
								width: 116px;
							}
							>.td5{
								width: 118px;
							}
							>.td6{
								width: 90px;
							}
							>.td7{
								width: 81px;
							}
							>.name{
								font-size: 12px;
								color: #4277ff;
								transform: translateY(5.5px);
								>img{

								}
								>span{
								    display: inline-block;
									transform: translateY(-5px) translateX(8px);
								}
							}
						}
					}

				}
			}
		}
		>.indexRight{
			width: 320px;
			min-height: 500px;
			float: right;
			>.newDeal{
				width: 100%;
				min-height: 271px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				margin-bottom:11px; 
				>.newDealTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					border-bottom:1px solid #eeeeee;
					>p{
						cursor: pointer;
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>ul{
					width: 100%;
					font-size: 12px;					
					>li{
						height: 40px;
						line-height: 40px;
						padding: 0 6px 0 7px;
						>img{
						    vertical-align: top;
							transform: translateY(14px);
							margin-right: 2px;
						}
						>span{
							display: inline-block;
							width:60%;
							overflow: hidden;                                                                      
    						text-overflow: ellipsis;
    						white-space: nowrap;
							color: #333333;
						}
						>time{
							float: right;
							color: #787878;
						}
					}
				}
			}
			>.event{
				width: 320px;
				height: 81px;
				background-color: #fba73e;
				box-shadow: 0px 0px 16px -4px #bbb;
				padding: 0 12px 0 13px;
				text-align: center;
				line-height: 81px;
				cursor: pointer;
				position: relative;
				margin-bottom: 11px;
				>p{
					font-size: 18px;
					color: #FFF;
					letter-spacing: 2px;
					>img{
						transform: translateY(5px);
						margin-right:12px; 
					}
				}
				>.point{
					width: 6px;
					height: 6px;
					background-color: #fff;
					border-radius: 50%;
					position: absolute;
					top: 0;
				}
				>.pointLeft{
					top: 38px;
					left: 13px;
				}
				>.pointRitgh{
					right: 13px;
					top: 38px;
				}
			}
			>.scrollExpress{
				width: 320px;
				min-height: 380px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				margin-bottom: 11px;
				>.scrollExpressTitle{
					width: 100%;
					height: 50px;
					cursor: pointer;
					line-height: 50px;
					border-bottom:1px solid #eeeeee;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.scrollExpressInfo{
					width: 320px;
					padding: 14px 13px 0 11px;
					>dl{
						display: flex;
						margin-bottom: 7px;
						font-size: 12px;
						color: #333333;
						>dt{
							margin-right: 12px;
							>.time{
								color: #5060a2;
								width: 48px;
								height: 22px;
								border-radius: 10px;
								border:1px solid #5060a2;
								display: inline-block;
								text-align: center;
								line-height: 20px;
							}
							>.line{
								width: 1px;
								height: 34px;
								border:1px solid #cce0ea;
								transform: translateX(23px);
							}
						}
						>dd{
							>p{
								line-height: 23px;
								cursor: pointer;
							}
						}
					}
				}
			}
			>.rankingList{
				width: 320px;
				height: 373px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.rankingListTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.rankingListChoose{
					width: 320px;
					height: 34px;
					font-size: 12px;
					color: #666;
					display: flex;
					justify-content: center;
					>.rankingActives{
						width: 63px;
						height: 20px;
						background-color: #dae3fb;
						color: #666666;
						text-align: center;
						line-height: 20px;
						position: relative;
					}
					>.rankingActives::after{
						content:'';
						width: 4px;
						height: 4px;
						background-color: #4277ff;
						position: absolute;
						top: 8px;
						border-radius:50%;
						left: 7px;
						margin-right: 6px;
					}
					
					>li{
						margin-right: 33px;
					}
				}
				>table{
					width: 305px;
					min-height: 280px;
					margin-left: 7px;
					border-collapse:collapse;
					>thead{
						width: 305px;

						>tr{
							background-color: #f4f4f4;
							>td{
								width: 33%;
								height: 32px;
								margin-left: 10px;
								font-size: 12px;
								color: #666;
								text-align: center;
								transform: translateX(-13px);

							}
						}
					}
					>tbody{
						>.tbr{
							height: 36px;
							width: 100%;

							>td{
								width: 33%;
								height: 20px;
								line-height: 20px;
								transform: translateX(-15px);
								font-size: 12px;
								color: #666;
								padding-left: 26px;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
							}
						}
					}
				}
			}
			>.rOf{
				margin-top: 11px;
				width: 320px;
				border:1px solid #e4e4e4;
				min-height: 373px;
				>.rOfTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 0px;
						>.rofActive{
							border-top:3px solid #4277ff;
							color: #4277ff;
						}
						>span{
							display: inline-block;
							text-align: center;
							width: 50%;
							>img{
							    float: right;
								transform: translateY(20px);
							}
						}
						
					}
				}
				>.rofData{
					width: 100%;
					font-size: 12px;
					color: #666;
					display: flex;
					justify-content: center;
					height: 34px;
					>li{
						width: 63px;
						height: 20px;
						text-align: center;
   			 			line-height: 20px;	
   			 			margin-right: 11px;
   			 			position: relative;
					}
					>.rofActives{background-color: #dae3fb;}
					>.rofActives::after{
						content: '';
						width: 4px;	

						height: 4px;
						position: absolute;
						top: 9px;
						border-radius: 50%;
						left: 5px;
						background-color: #4277ff;

					}

				}
				>.rofDatadetails{
					width: 320px;
					padding: 0 6px 0 7px;
					min-height: 200px;
					font-size: 12px;
					color: #666;
					>.head{
						height: 32px;
						width: 100%;
						background-color: #f4f4f4;
						display: flex;
						justify-content: space-around;
						line-height: 32px;
					}
					>.body{
						display: flex;
						justify-content: space-around;
						height: 32px;
						line-height: 32px;

					}
				}
			}
			>.twitterMessages{
				width: 320px;
				height: 347px;
				margin-top: 11px;
				margin-bottom: 11px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.twitterMessagesTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						cursor: pointer;
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.message{
					>dl{
						padding-left: 11px;
						font-size: 12px;
						color: #666;
						display: flex;

						>dt{
							margin-right: 8px;
							>img{
								width: 36px;
								height: 36px;
								border:1px solid red;
								border-radius: 50%;
							}
						}
						>dd{
							padding-top: 14px;
						}
					}
				}
			}
			>.miningData{
				width: 320px;
				height: 732px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.miningDataTitle{
					width: 100%;
					height: 50px;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.minidataChoose{
					font-size: 12px;
					color: #666;
					display: flex;
					height: 30px;
					justify-content: center;
					>:nth-child(1){
						margin-right: 22px;
					}
					>li{
						width: 72px;
						height: 20px;
						position: relative;
						text-align: center;
						line-height: 20px;

					}
					>.minidataAvtive{
						width: 72px;
						height: 20px;
						background-color: #dae3fb;	

					}
					>.minidataAvtive::after{
						content:'';
						width: 4px;
						height: 4px;
						background-color: #4277ff;
						position: absolute;
					    top: 9px;
						left: 7px;
					}
				}
				>.data{
					width: 320px;
					min-height: 22px;
					>:nth-last-child(1){
						border-bottom: 1px solid #eee;
					}
					>li{
						font-size: 12px;
						color: #666;
						line-height: 50px;
						height: 50px;
						border-top:1px solid #eeeeee;
						>.left{
							color: #979797;
						}
						>.right{
							float: right;
						}
					}
				}
			}
			>.market{
				width: 320px;
				height: 235px;
				margin-top: 18px;
				border:1px solid #e4e4e4;
				border-top:3px solid #4277ff;
				>.marketTitle{
					width: 100%;
					height: 50px;
					cursor: pointer;
					line-height: 50px;
					>p{
						font-size: 12px;
						color: #333333;
						padding: 0 7px 0 10px;
						>img{
						    float: right;
							transform: translateY(20px);
						}
					}
				}
				>.datar{
					width: 320px;
					min-height: 50px;
					padding: 12px 7px 0 11px;
					>span{
						font-size: 12px;
						color: #666666;
						margin-right: 9px;
						display: inline-block;
						background-color: #dedede;
						padding: 0 21px;
						border-radius: 2px;
						height: 30px;
						line-height: 30px;
						cursor: pointer;
						margin-bottom: 12px;
						text-align: center;
					}
					>span:active{
						color: white;
						background-color: #4277ff;
					}
				}
			}
		}

	}
</style> 