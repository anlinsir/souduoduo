+<template>	
	<div class="warp">
		<header>
			<span @click='toIndex'><img style="width: 2.66vw;height: 4.8vw;" src="/static/img/businessservice_icon_return_whitess.png"></span>
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
						<dd><p><input @input='changeVValue' @focus='changeValue' @blur='changeValues(item.num,$event)' type="number" name="num" :placeholder="item.num"></p><p>{{item.nuit}}</p></dd>
						
					</dl>
				</li>
		

			</ul>
		</main>


		<Footer />


	</div>
</template>


<script>
	import axios from 'axios'
	import Footer from '../../components/footer'

	export default {
		created(){
			var device_id = '1'
			// axios.post(`http://rate.jglist.com/rate`,{device_id})
			// 	.then((res)=>{
			// 		console.log(res)
				
			// })
			var ajax = new XMLHttpRequest();
			//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
			ajax.open('post','http://rate.jglist.com/rate');
			//步骤三:发送请求
			ajax.send({device_id:1});
			//步骤四:注册事件 onreadystatechange 状态改变就会调用
			ajax.onreadystatechange = function () {
			   if (ajax.readyState==4 && ajax.status==200) {
			    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
			　　　　console.log(xml.responseText);//输入相应的内容
			  　　}
			}




			axios.get('http://106.14.56.22:9529/index.php?r=v2/exchangerate/rate&list&auth_name=id&grand_id=6&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then((res)=>{
					console.log(res.data.data)
				})
		}
		,
		components:{
			Footer			
		},
		methods:{
			toIndex(){
				history.back()

			},
			changeValue(e){
				e.target.placeholder = '100.00'
				
			},
			changeValues(num,e){
				e.target.placeholder = num

			},
			changeVValue(){
				console.log('fcgjh')
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
				],
				num:''
			})
		},
		computed:{
			
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
							font-size: 3vw;
							font-size: #333333;
							>:nth-child(1){
								>input{
									border: none;
									outline: none;
									text-align: right;
								font-size: 5vw;
								color: #b2b2b2;


								}
							}
						}
					}
				}
			}
		}
	}

</style>