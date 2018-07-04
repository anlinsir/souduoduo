<template>
	
		<div class="warp">
			<div class="loginBox">

				<div class="loginLeft">
					
				</div>




				<div class="loginRight">
					<ul v-if='active !=3'>

						<li @click='changeActive(index)' :class="active == index ? 'active' : '' "  v-for='(item,index) in list'>{{item}}</li>						
					</ul>

					<div  v-if='active ==3' class="regite">
						<img @click='returns' src="/static/img/leftroo.png">
						<span>忘记密码</span>

					</div>

					<div class="logins"  :style="{marginTop:active == 0 ? '60px' : '31px'}">

						<div class="phone" v-for='(item,ind) in input' :key='ind' :style="{marginBottom : active == 0 ? '24px' : '15px'}">
							<img class="limg" :src="item.img">	
							<input :type="item.type" :placeholder="item.place" :name='item.name' v-model='item.model'>
							<img v-if='item.rimg' class="rimg" :src="yzm" style="cursor: pointer;" @click='chengYzm'>
							<span v-if='item.yz' class="clicl" @click='telyzm'>获取验证码</span>
						</div>
						
						<div class="btng">
							<button :style="{marginBottom: active == 0 ? '22px' : '0'}" @click='login'>{{active == 0 ? '立即登录' : active == 1 ? '立即注册' : '重置密码' }}</button>
							<span v-show='active == 0' @click='activecc'>忘记密码？</span>
						</div>




					</div>

				</div>
			</div>

		</div>
	
</template>


<script>
	import axios  from 'axios'
	import qs from 'qs';
	import $ from 'jquery'
	export default {
		data(){
			return({
				list:['登录','注册'],
				active:0,
				input:[
					{
						img:"/static/img/loginUser.png",
						type:'text',
						place:'请输入手机号',	
						name:'phone',
						model:''				
					},
					{
						img:"/static/img/loginlock.png",
						type:'password',
						place:'请输入密码',
						name:'pass'	,
						model:''				
					},
					{
						img:"/static/img/loginkey.png",
						type:'text',
						place:'请输入验证码',	
						rimg:"/static/img/loginyzm.png",
						name:'yz'	,
						model:''				
					}

				],
				yzm:null
			})
		},
		methods:{
			telyzm(){
				console.log(this.input[0].model)
				axios.get(`http://sdd.xtype.cn/api/auth/sendCode?&tel=${this.input[0].model}`)
					.then((res)=>{
						console.log(res.data)
					})
			},
			chengYzm(){
				axios.get('http://sdd.xtype.cn/api/auth/captcha', {responseType: 'arraybuffer'}).then(response => {return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))})
				.then(data => {
					this.yzm = data
				})
			},
			changeActive(index){
				this.active = index
				axios.get('http://sdd.xtype.cn/api/auth/captcha', {responseType: 'arraybuffer'}).then(response => {return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))})
				.then(data => {
					this.yzm = data
				})
				if(index == 0){
					this.input = [
							{
									img:"/static/img/loginUser.png",
									type:'text',
									place:'请输入手机号',
									name:'phone',
									model:''	
														
								},
								{
									img:"/static/img/loginlock.png",
									type:'password',
									place:'请输入密码',
									name:'pass'	,
									model:''						
								},
								{
									img:"/static/img/loginkey.png",
									type:'text',
									place:'请输入验证码',	
									rimg:"/static/img/loginyzm.png",
									name:'yz'	,
									model:''			
								}

						]
					}
				if(index == 1){
					this.input =[
						{
							img:"/static/img/loginUser.png",
							type:'text',
							place:'请输入手机号',	
							name:'phone',
							model:''					
						},
						{
							img:"/static/img/loginmessage.png",
							type:'text',
							place:'请输入短信验证码',
							yz:true,
							name:'dyz',
							model:''	
						},
						{
							img:"/static/img/loginlock.png",
							type:'password',
							place:'请设置密码',					
							name:'pass',
							model:''	
						},
						{
							img:"/static/img/loginlock.png",
							type:'password',
							place:'请再次输入密码',											
							name:'doupass',
							model:''	
						},
						{
							img:"/static/img/loginkey.png",
							type:'text',
							place:'请输入验证码',	
							rimg:"/static/img/loginyzm.png"	,
							name:'yz'	,
							model:''		
						}
					]
				}
			},
			activecc(){
				this.active = 3
				if(this.active == 3){
					this.input = [
							{
								img:"/static/img/loginUser.png",
								type:'text',
								place:'请输入手机号',	
								name:'phone'				
							},
							{
								img:"/static/img/loginmessage.png",
								type:'text',
								place:'请输入短信验证码',
								yz:true,
								name:'dyz'
							},
							{
								img:"/static/img/loginlock.png",
								type:'password',
								place:'请设置密码',					
								name:'pass'
							},
							{
								img:"/static/img/loginlock.png",
								type:'password',
								place:'请再次输入密码',											
								name:'doupass'
							},
						]
				} 
			},
			returns(){
				this.active = 0
				if(this.active == 0){
					this.input = [
							{
									img:"/static/img/loginUser.png",
									type:'text',
									place:'请输入手机号',
									name:'phone'					
								},
								{
									img:"/static/img/loginlock.png",
									type:'password',
									place:'请输入密码',
									name:'pass'						
								},
								{
									img:"/static/img/loginkey.png",
									type:'text',
									place:'请输入验证码',	
									rimg:"/static/img/loginyzm.png",
									name:'yz'			
								}

						]
					}
			},
			login(){
				var logininfo = []
				console.log(this.active) //通过active判断提交类型
				for(var i in this.input){
					if(this.input[i].model == ''){
						alert('至少有一项未填写')
						return
					}
					// if(this.input[i].name == 'doupass'){ 不知道干啥的
						
					// }
					logininfo.push(this.input[i].model)
				}

				var tel = /^[1][0-9]{10}$/;
				var reg = /^.{6,}$/;
				switch (this.active){

					case 0:

						if(!logininfo[0] || !logininfo[1] || !logininfo[2]){
							window.alert('至少有一个字段未填写')
							return
						}else if(!tel.test(logininfo[0])){
							window.alert('手机号格式错误')
							return
						}else if(!reg.test(logininfo[1])){
							window.alert('密码错误')
							return
						}


					console.log(logininfo[0],logininfo[1],logininfo[2])
					axios.get(`http://sdd.xtype.cn/api/auth/login?&tel=${logininfo[0]}&password=${logininfo[1]}&captcha=${logininfo[2]}`)
						.then((res)=>{
							console.log(res.data)
							if(res.data.code == 0 && res.data.msg == 'ok'){
								localStorage.token = res.data.data.token
								localStorage.login =  logininfo[0]
								this.$router.push('/index/index')
							}

					})
						// console.log('登录')
						// console.log(logininfo)
						// localStorage.login =  logininfo[0]
						// this.$router.push('/index/index')
						break;
					case 1:
					// console.log({tel:logininfo[0],password:logininfo[2],sms_code:logininfo[1],captcha:logininfo[4]})
					if(!logininfo[0] || !logininfo[1] || !logininfo[2] || !logininfo[3] || !logininfo[4]){
							window.alert('至少有一个字段未填写')
							return
						}else if(!tel.test(logininfo[0])){
							window.alert('手机号格式错误')
							return
						}else if(!reg.test(logininfo[2])){
							window.alert('密码错误')
							return
						}else if(logininfo[2] != logininfo[3]){
							window.alert('两次密码不一致')
							return
						}

					var pro = {tel:logininfo[0],password:logininfo[2],sms_code:logininfo[1],captcha:logininfo[4]}
					var headers = {'X-Requested-With': 'XMLHttpRequest'}

					console.log("http://sdd.xtype.cn/api/auth/register",pro, headers)
						axios.get(`http://sdd.xtype.cn/api/auth/register?&tel=${logininfo[0]}&password=${logininfo[2]}&sms_code=${logininfo[1]}&captcha=${logininfo[4]}`)
							.then((res)=>{
								console.log(res.data)
								if(res.data.code == 0 && res.data.msg == '注册成功'){
									this.active = 0
									this.input = [
												{
														img:"/static/img/loginUser.png",
														type:'text',
														place:'请输入手机号',
														name:'phone',
														model:''	
																			
													},
													{
														img:"/static/img/loginlock.png",
														type:'password',
														place:'请输入密码',
														name:'pass'	,
														model:''						
													},
													{
														img:"/static/img/loginkey.png",
														type:'text',
														place:'请输入验证码',	
														rimg:"/static/img/loginyzm.png",
														name:'yz'	,
														model:''			
													}

									]
									this.input[0].model = logininfo[0]
								}

							})
						
																	
						break;
					case 3:
						if(!logininfo[0]  || !logininfo[1] || !logininfo[2] || !logininfo[3]){
							window.alert('至少有一个字段未填写')
							return
						}else if(!tel.test(logininfo[0])){
							window.alert('手机号格式错误')
							return
						}else if(logininfo[2] != logininfo[3]){
							window.alert('两次密码不一致')
							return
						}

						axios.get(`http://sdd.xtype.cn/api/auth/password?&tel=${logininfo[0]}&password=${logininfo[2]}&sms_code=${logininfo[1]}`)					
							.then((res)=>{
								console.log(res.data)
								//

							})
						break;
						default:
						console.log('错误')
						break
					
				}
				
			}
		},
		mounted(){
			axios.get('http://sdd.xtype.cn/api/auth/captcha', {responseType: 'arraybuffer'}).then(response => {return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))})
			.then(data => {
				this.yzm = data
				})
		}
	}
</script>


<style lang="scss" scoped>	
	.warp{
		width: 100%;
		height: 100%;
		background-color: #e9e9e9;
		position: relative;
		background-image: url('/static/img/loginbg.png');
		background-repeat: no-repeat;
		background-position-x: 1200px;
		background-position-y:180px;

		>.loginBox{
			width: 800px;
			height: 520px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			border-radius: 12px;
			display: flex;
			box-shadow:  3px 14px 57px 14px #3333;
			>.loginLeft{
				width: 310px;
				height: 100%;
				border-top-left-radius: 12px;
				border-bottom-left-radius: 12px;
				background-image: url('/static/img/pic_logobg.png')
			}
			>.loginRight{
				width: 490px;
				height: 100%;
				border-top-right-radius: 12px;
				border-bottom-right-radius: 12px;
				padding-top: 24px;
				background-color: #fff;
				>ul{
					display: flex;
					width: 100%;
					height: 45px;

					padding: 0 105px;
					justify-content: space-between;
					>.active{
						color: #4277ff;
						border-bottom: 3px solid #4277ff;
					}
					>li{
						width: 105px;
						text-align: center;
						line-height: 45px;
						cursor: pointer;
						font-size: 16px;
						color: #232323;

					}
				}
				>.regite{
					height: 45px;
					text-align: center;
					line-height: 45px;
					color: #4277ff;
					letter-spacing: 4px;
					>img{
						transform: translateX(-131px);
						cursor: pointer;
					}
				}
				>.logins{
					width: 100%;
					>.phone{
						margin-left: 65px;
						margin-right: 60px;
						position: relative;
						>.clicl{
							position: absolute;
							top: 6px;
							right: 5px;
							width: 106px;
							height: 36px;
							border:1px solid #4277ff;
							color: #4277ff;
							font-size: 14px;
							text-align: center;
							cursor: pointer;
							line-height: 36px;
							border-radius: 7px;
						}
						>input{
							height: 50px;
							border:1px solid #e5e5e5;
							width: 100%;
							padding: 0 0 0 50px;
							border-radius: 7px;
						}
						>img{
							position: absolute;
							top: 0;
						}
						>.limg{
							top:15px;
							left: 15px;
						}
						>.rimg{
							width: 80px;
							height: 32px;
							top:8px;
							right: 10px;
						}
					}
					>.btng{
						width: 100%;
						text-align: center;
						padding: 0 60px 0 65px;
						>button{
							height: 50px;
							border:none;
							width: 100%;
							background-color: #4277ff;
							border-radius: 7px;
							font-size: 14px;
							color: #fff;
							letter-spacing: 2px;
							cursor: pointer;

						}
						>span{
							font-size: 13px;
							color: #4277ff;
							cursor: pointer;
						}
					}
					
				}

			}
		}
	}

</style>