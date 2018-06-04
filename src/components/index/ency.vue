<template>
	<div class="encyWarp">
		<div class="encyTop">
			<ul>
				<li>分类</li>
				<li @click='changeNav(index)' :class="navActive == index ? 'navActive': '' "   v-for='(item,index) in navList' :key='index'>{{item}}</li>
			</ul>	

			<div class="input">
				<input type="text" placeholder="搜索教程名称" v-model='searchModel' />
				<span @click='serach' style="background-image: url('/static/img/search.png');background-repeat: no-repeat;
					display: inline-block;width: 14px;height: 15px;position: absolute;right: 32px;top: 22px;cursor: pointer;"></span>
			</div>
		</div>

		<div class="encyBom">
			<dl @click='toEncyDetali' v-for='(item,index) in 11'>
				<dt><img src="/static/img/ency.png"></dt>
				<dd style="color: #000;font-weight: bold;">DTA币简介、网址及交易平台</dd>
				<dd style="color: #9a9a9a;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 96%;">Date是为了解决互信问题而创建的ICO产品…</dd>
				<dd style="color: #9a9a9a;">
					<span style="margin-right: 23px;"><img style="margin-right: 5px;" src="/static/img/auge.png">100</span>
					<span><img  src="/static/img/Share.png" style="margin-right: 5px;">99</span>
				</dd>
			</dl>
			
		</div>

		<div class="pages">
			<div class="pagesz">
				<ul class="page">
					<li><</li>
					<li @click='pagechange(id)' :class="pages ==id ? 'pages' : '' " v-for='(ii,id) in 10'>{{ii}}</li>
					<li>></li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return({
				navList:['全部','基本原理','交易平台','钱包储蓄','挖矿指南','开发教程','其他'],
				navActive:0,
				pages:0,
				searchModel:''
			})
		},
		methods:{
			changeNav(index){
				this.navActive = index			
			},
			pagechange(index){
				this.pages = index
			},
			toEncyDetali(){
				this.$router.push('/index/encyDetali/0')
			},
			serach(){
				alert(this.searchModel + '暂无结果')
			}


		}
	}
</script>

<style lang="scss" scoped>
	.encyWarp{
		width: 1200px;
		min-height: 100px;
		border:1px solid #e5e5e5;
		>.encyTop{
			width: 100%;
			background-color: #f2f2f2;
			overflow: hidden;
			>ul{
				width: 537px;
				height: 58px;			
				font-size: 12px;
				color: #666;
				padding-left: 20px;
				justify-content: space-between;
				display: flex;
				float: left;
				>.navActive{
					background-color: #4277ff;
					border-radius: 20px;
					color: #fff;

				}
				>li{
					width: 56px;
					height: 24px;
					margin-top: 18px;
					cursor: pointer;
					text-align: center;
					line-height: 24px;
				}
			}
			>.input{
				position: relative;
				float: right;
					>input{
					float: right;
					transform: translateY(12px) translateX(-20px);
					width: 258px;
					height: 34px;
					background-color: #fff;
					border:none;
					border-radius: 20px;
					padding-left: 30px;
					font-size: 12px;
					color: #9f9f9f;
					
					


				}
			}
		}
		>.encyBom{
			margin-top: 25px;
			width: 100%;
			min-height: 200px;
			padding: 0 20px;
			display: flex;
			flex-wrap: wrap;
			>:nth-child(4n){
				margin-right: 0;
			}
			>dl{
				width: 272px;
				height: 255px;
				border:1px solid #e5e5e5;
				cursor: pointer;
				margin-bottom: 28px;
				margin-right: 23px;
				>dt{
					width: 100%;
					height: 168px;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				>dd{
					font-size: 12px;
					padding: 0 20px 0 10px;
					margin-top: 10px;
				}
			}
		}
		>.pages{
			width: 100%;
			text-align: center;
			>.pagesz{
				display: inline-block;
				>ul{
					display: flex;
					>.pages{
						color: #4277ff;
					}
					>li{
						font-size: 12px;
						margin: 0 10px;
						cursor: pointer;
					}
				}
			}
		}
	}

</style>