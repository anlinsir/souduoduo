<template>
	<div>
		<div class="footerWarp">

				<div class="footerTopWarp">
						<div class="footerTop">
							<p>友情链接：</p>
							<ul>
								<li v-for='(item,index) in linkList'>
									{{item}}
								</li>
							</ul>
						</div>

				</div>
				<div class="footerBomWarp">

				<div class="footerBom">
					<div class="Bom1">
						<img src="/static/img/indexlogo.png"> 
						<dl>
							<dt>SODUODUO</dt>
							<dd>查币就去搜多多</dd>
						</dl>

							<ul class="ul1">
								<li @click='toFaq(0)'>关于我们 <span>|</span> </li>
								<li @click='toFaq(1)'>联系我们 <span>|</span> </li>
								<li @click='toFaq(2)'>常见问题 <span>|</span> </li>
								<li>下载APP   </li>
							</ul>

						<div class="ul2W">
							<ul class="ul2">
								<li><img src="/static/img/footerWein.png"></li>
								<li><img src="/static/img/footerWeibo.png"></li>
								<li><img src="/static/img/footerQQ.png"></li>
								<li><img src="/static/img/footerPlant.png"></li>

							</ul>
						</div>
						<p>Copyright ©2018 Souduoduo Ltd. All Rights Reserved.</p>
					</div>

					
						
				

				</div>
			</div>	
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return({
				linkList:['火星财经','比特头条','币源社区','链向财经','区块网','COBO钱包','鱼池','链闻','币易','未来财经','易派支付','金色财经','芭比财经']
			})
		},
		methods:{
			toFaq(id){
				
				switch (id){
					case 0:
					this.$router.push('/index/faq/about')						
						break;
					case 1:
						this.$router.push('/index/faq/call')
						break;
					case 2:
						this.$router.push('/index/faq/faq')
						
						break;
				}
			}
		}
	}
</script>


<style lang="scss" scoped>
	.footerWarp{
		width: 100%;
		margin-top: 80px;
		height: 100%;
		

		
			>.footerTopWarp{
				width: 100%;
				height: 128px;
				background-color: #11161e;
				>.footerTop{
					width: 1200px;
					height: 128px;
					margin: auto;
					padding: 26px 0 0 0;
					
					>p{
						color: #fff;
						margin-left: 2px;
						margin-bottom: 15px;
						font-size: 12px;
					}
					>ul{
						display: flex;
						flex-wrap: wrap;
						margin-left: 2px;
						justify-content: flex-start;

						font-size: 12px;
						>li{
							width: 10%;
							margin-bottom:12px; 
							color: #aebbcf;
							cursor: pointer;
						}
					}
				}
			}
			>.footerBomWarp{
				width: 100%;
				height: 300px;
				background-color: #08090e;
					>.footerBom{
					width: 1200px;
					margin: auto;
					color: #fff;
					height: 300px;
					background-color: #08090e;
					text-align: center;
					padding:55px 0 0 0;
					>.Bom1{
						text-align: center;
						display: inline-block;
						>img{
							 margin-right: 0px;
						}
						>dl{
							float: right;
							transform: translateY(10px) translateX(-95px);
							>dt{
								font-size: 17px;
								font-weight: bold;
								color: #fff;
							}
							>dd{
								font-size: 14px;
								color: #5a778b;
								letter-spacing: 1.2px;
							}
						}
						>.ul1{
							display: flex;
							margin-top: 70px;
							transform: translateX(20px);
							font-size: 12px;
							color: #aebbcf;
							>li{
								cursor: pointer;
								>span{
									margin: 0 29px;
									color: #252833;
								}
							}
						}	
						
						>.ul2W{
							display: inline-block;
							>.ul2{
								width: 138px;
								display: flex;
								justify-content: space-between;
								margin-top: 29px;
								margin-bottom:10px;
							}	
						}
						>p{
							font-size: 12px;
							color: #3f4753;
						}
						
					}
				
				}
			}
			
			

	}
</style>