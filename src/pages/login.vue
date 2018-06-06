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
							<img v-if='item.rimg' class="rimg" :src="item.rimg" >
							<span v-if='item.yz' class="clicl">获取验证码</span>
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

				]
			})
		},
		methods:{
			changeActive(index){
				this.active = index

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
							type:'text',
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
								type:'text',
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
						alert('non')
						return
					}
					// if(this.input[i].name == 'doupass'){ 不知道干啥的
						
					// }
					logininfo.push(this.input[i].model)
				}

				switch (this.active){
					case 0:
						console.log('登录')
						console.log(logininfo)
						localStorage.login =  logininfo[0]
						this.$router.push('/index/index')
						break;
					case 1:
						console.log('注册')
						console.log(logininfo)
						break;
					case 3:
						console.log('改密')
						console.log(logininfo)
						break;
						default:
						console.log('错误')
						break
					
				}
				
			}
		}
	}
</script>


<style lang="scss" scoped>	
	.warp{
		width: 100%;
		height: 100%;
		background-color: #e9e9e9;
		position: relative;
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