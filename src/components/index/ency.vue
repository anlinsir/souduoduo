<template>
	<div class="encyWarp">
		<div class="encyTop">
			<ul>
				<li>分类</li>
				<li @click='changeNav(index)' :class="navActive == index ? 'navActive': '' "   v-for='(item,index) in navList' :key='index'>{{item.name}}</li>
			</ul>	

			<div class="input">
				<input type="text" placeholder="搜索教程名称" v-model='searchModel' />
				<span @click='serach' style="background-image: url('/static/img/search.png');background-repeat: no-repeat;
					display: inline-block;width: 14px;height: 15px;position: absolute;right: 32px;top: 22px;cursor: pointer;"></span>
			</div>
		</div>

		<div class="encyBom">
			<dl @click='toEncyDetali(item.id)' v-for='(item,index) in encyList' :data-id='item.id' :data-type='item.type_id'>
				<dt><img :src="item.cover"></dt>
				<dd style="color: #000;font-weight: bold;">{{item.title}}</dd>
				<dd style="color: #9a9a9a;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 96%;" :title="item.tiny_content">{{item.tiny_content}}</dd>
				<dd style="color: #9a9a9a;">
					<span style="margin-right: 23px;"><img style="margin-right: 5px;" src="/static/img/auge.png">{{item.read}}</span>
					<span><img  src="/static/img/Share.png" style="margin-right: 5px;">{{item.shared}}</span>
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
	import axios from 'axios'
	export default{
		data(){
			return({
				navList:['全部','基本原理','交易平台','钱包储蓄','挖矿指南','开发教程','其他'],
				navActive:0,
				pages:0,
				searchModel:'',
				encyList:[]
			})
		},
		methods:{
			changeNav(index){
				this.navActive = index			
			},
			pagechange(index){
				this.pages = index
			},
			toEncyDetali(id){
				this.$router.push(`/index/encyDetali/${id}`)
			},
			serach(){
				alert(this.searchModel + '暂无结果')
			}


		},
		mounted(){
			document.documentElement.scrollTop   = 0
			document.body.scrollTop = 0
			axios.get(`http://sdd.xtype.cn/api/ency/types`)//获取百科分类
				.then((res)=>{
					this.navList = res.data.data
					this.navList.unshift({id:-1,name:'全部'})
			})

			axios.get(`http://sdd.xtype.cn/api/ency/list`)
				.then((res)=>{
					this.encyList = res.data.data.list
				})
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