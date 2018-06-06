<template>
	<div class="myWarp">
		<ul class="MLeft">
			<li class="UserImg">
				<img src="/static/img/myImg.png">
				<span style="margin-bottom: 5px;color: #333;">ID:13526410256</span>
				<span style="color: #666;">昵称：{{loginInfo}}</span>
			</li>

			<li @click='chengAc(index)' class="myUser" :style="{borderBottom : index  == 1 ? 'none' : '' }"  :class="useChooseAc == index ? 'active' : '' " v-for='(item,index) in useChoose'> <span v-if='useChooseAc == index'></span>{{item}}</li>



		</ul>

		<div class="MRight">
			<div class="Rtitle">
				<p>个人中心</p>
				<p>PERSONAL CENTER</p>
			</div>

			<div class="Rmian">
				<p style="margin-bottom: 32px;">登录账号：13526410256</p>
				<p style="margin-bottom: 24px;">注册时间：2018年5月28日</p>
				<label class="us" >
					<span>用户昵称</span>
					<input  @input='userNameInput' v-model='useName' type="text" :placeholder=" '默认昵称' + loginInfo"><br>
					<span v-if='inInput' @click='inputNull' class="cancel"></span>
					<button @click='useNameChange'>确认修改</button>
				</label>

				<label class="ps" >
					<span>修改密码</span>
					<input @input='OncheckdPass'  @blur='checkOldPass' v-model='oldPass' class="oldPass" type="text" placeholder="请输入旧密码"><br>
					<input  v-model='newPass'  type="text" placeholder="请输入新密码"><br>
					<input  v-model='newPassAngin'  type="text" placeholder="请再次输入密码"><br>
					<span v-if='checkdPass' class="check"></span>
					<button @click='changePass'>确认修改</button>
				</label>

			
			</div>
		</div>


	</div>

</template>


<script>
	export default{
		data(){
			return({
				useChoose:['个人中心','退出登录'],
				useChooseAc:0,
				loginInfo:'',
				useName:'',
				inInput:false,
				oldPass:'',
				newPass:'',
				newPassAngin:'',
				checkdPass:false
			})
		},
		methods:{
			chengAc(index){//切换个人中心和退出登录
				this.useChooseAc = index
			},
			userNameInput(){//输入时去掉xx按钮
				this.inInput = true
			},
			inputNull(){//删除输入的名字
				this.useName = ''
				this.inInput = false

			},
			useNameChange(){//修改名字
				if(!this.useName){
					alert('好好想想你叫什么')
					return
				}

				localStorage.login = this.useName
				alert('修改成功')
				location.reload()
			},

			checkOldPass(){//老密码失焦触发 检测密码正确
				this.checkdPass = true
			},
			OncheckdPass(){//输入时去掉正确按钮
				this.checkdPass = false

			},
			changePass(){//确认修改
				if(!this.oldPass || !this.newPass || !this.newPassAngin){
					alert('有一项未填')
					return
				}
				if(this.newPass != this.newPassAngin){
					alert('两次密码不正确')
					return
				}
				console.log(this.oldPass,this.newPass,this.newPassAngin)
			}

		},
		mounted(){
			this.loginInfo = localStorage.login
		}
	}
</script>

<style scoped lang="scss">
	.myWarp{
		width: 100%;
		min-height: 100px;
		overflow: hidden;
		>.MLeft{
			float: left;
			width: 320px;
			min-height: 320px;
			border:1px solid #e5e5e5;
			border-top:3px solid #4277ff;
			>li{

			}
			>:nth-last-child(1){
				border-bottom:none;
			}
			>.UserImg{
				width: 100%;
				height: 177px;
				margin-top: 21px;
				text-align: center;
				border-bottom:1px solid #e5e5e5;
				font-size: 14px;
				>img{
					border-radius: 50%;
					margin-bottom:15px;
				}
				>span{
					width: 100%;
					display: inline-block;
				}

			}
			>.active{
				color: #4277ff;
			}
			>.myUser{
				width: 100%;
				height: 59px;
				border-bottom:1px solid #e5e5e5;
				padding: 0 0 0 29px;
				line-height: 59px;
				font-size: 15px;
				>span{
					transform: translateY(3px);display: inline-block;width: 2px;height: 16px;margin-right: 6px;background-color: #4277ff;
				}
			}
		
		}
		>.MRight{
			float: right;
			width: 866px;
			min-height: 200px;
			border-top:3px solid #4277ff;
			padding-left: 65px;
			padding-top: 43px;
			>.Rtitle{
				width: 100%;color: #333;
				margin-bottom: 88px;
				>:nth-child(1){
					font-size: 20px;
					margin-bottom: 19px;
				}
				>:nth-child(2){
					font-size: 16px;
					color: #b5b5b5;
				}
			}
			>.Rmian{
				width: 100%;
				font-size: 14px;
				color: #666;
				>.us{
					display: block;
					margin-bottom: 70px;
					position: relative;
					>.cancel{
						position: absolute;
						width: 16px;
						height: 16px;
						top: 12px;
						left: 320px;
						cursor: pointer;
						background-image: url('/static/img/cross.png')
					}
					>input{
						width: 284px;
						height: 40px;
						border: 1px solid #e5e5e5;
						border-radius: 10px;padding-left: 14px;margin-left: 5px;
					}
					>button{
						border-radius: 10px;
						margin-left: 65px;
						width: 284px;
						height: 40px;
						background-color: #fff;
						margin-top: 16px;
						border: 1px solid ;
						color: #4277ff;
						cursor: pointer;
					}
				}
				>.ps{						
					display: block;
					position: relative;
					>input{
						width: 284px;
						height: 40px;
						border: 1px solid #e5e5e5;
						margin-left: 65px;
						border-radius: 10px;padding-left: 14px;
						margin-bottom: 12px;
					}
					>.oldPass{
						
						border-radius: 10px;padding-left: 14px;margin-left: 5px;
					}
					>.check{
						position: absolute;
						width: 16px;
						height: 16px;
						top: 12px;
						left: 320px;
						cursor: pointer;
						background-image: url('/static/img/checkPass.png')
					}
					>button{
						border-radius: 10px;
						margin-left: 65px;
						width: 284px;
						height: 40px;
						background-color: #fff;
						margin-top: 5px;
						border: 1px solid ;
						color: #4277ff;
						cursor: pointer;
					}

				}
			}
		}

	}
</style>