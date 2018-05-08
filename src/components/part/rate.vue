<template>	
	<div class="warp">
		<header>
			<span @click='toIndex'><</span>
			<span>汇率转换</span>
		</header>

		<main>
			<ul>
				<li v-for='(item,index) in list' :key='index'>
					<dl>
						<dt>
							<img :src=" '/static/img/' + item.img "/>
							<span>{{item.country}}</span>
						</dt>
						<dd><p>{{item.num}}</p><p>{{item.nuit}}</p></dd>
						
					</dl>
				</li>
		

			</ul>
		</main>


		<Footer />


	</div>
</template>


<script>
	import Footer from '../../components/footer'

	export default {
		components:{
			Footer			
		},
		methods:{
			toIndex(){
				history.back()

			}
		},
		data(){
			return({
				list:[
					{
						img:'ecrate_icon_cny.png',
						country:'CNY',
						num:'100.00',
						nuit:'人民币',

					},
					{
						img:'ecrate_icon_usd.png',
						country:'USD',
						num:'14.68',
						nuit:'美元',

					},
					{
						img:'ecrate_icon_cad.png',
						country:'CAD',
						num:'19.40',
						nuit:'加拿大元',

					},
					{
						img:'ecrate_icon_hkd.png',
						country:'HKD',
						num:'114.46',
						nuit:'港币',

					},
					{
						img:'ecrate_icon_mop.png',
						country:'MOP',
						num:'117.92',
						nuit:'澳门元',

					}
				]
			})
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
			text-align: center;
			font-size: 4vw;
			height: 11.6vw;
			width: 100%;
			background-color: #FFF;
			line-height: 11.6VW;
			padding: 0 4VW;
			box-sizing: border-box;
			/*border: 1px solid #eee;*/

			>:nth-child(1){
				float: left;
				font-size: 8vw;
				color: #00d1b2;
 
			}
		}
		>main{
			flex: 1;
			overflow: auto;
			>ul{
				width: 100%;
				background-color: #fff;
				padding: 0 0 0 4vw;
				box-sizing: border-box;
				>li{
				box-sizing: border-box;
					height: 18.4vw;
					padding: 4vw 0 ;
					padding-right: 4vw; 

					border-bottom: -1px solid #eee;
					border-top: 1px solid #eee;
					>dl{

						>dt{
							width:20vw;
							font-size: 4vw;
							height: 9.6vw;
							float: left;
							>span{
								float: right;
								line-height: 9.6vw;
								display: inline-block;
							}
							>img{
							width: 9.6vw;
							height: 9.6vw;

							}
						}

						>dd{
							margin-top: 2vw;
							text-align: right;
							float: right;
							font-size: 2.93vw;
							font-size: #333333;
							>:nth-child(1){
								color: #b2b2b2;
								font-size: 3.46vw;
							}
						}
					}
				}
			}
		}
	}

</style>