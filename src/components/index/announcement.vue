<template>
	<div class="annWarp">
		<Nav :navList='navList' />

		<ul class="annList">
			<li @click='toAnnDetali' v-for='(ii,id) in 17'>
				<span 
					style="
					color: #4277ff;
					width: 68px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-right: 18px;
					">			<span class="heng"></span>
					BigOne</span>

				<span class="hover" >
					<img style="
							vertical-align: middle;
							margin-right: 11px;
					" src="/static/img/annImg.png">
					BigONE 支持 EOS 主网上线的公告
				</span>

				<span style="
					vertical-align: top;
					float: right;
				">
					2018-05-28 07:32
				</span>
			</li>
			

		</ul>
	</div>
</template>

<script>
	import Nav from '../nav'
	export default{
		components:{
			Nav
		},
		data(){
			return({
				navList:['交易所公告列表']
			})
		},
		methods:{
			toAnnDetali(){
				alert('还没写呢')
			}
		}

	}
</script>


<style scoped lang="scss">
	.annWarp{
		width: 100%;
		min-height: 100px;
		-webkit-border:1px solid #e5e5e5;
		-moz-border:1px solid red;

		>.annList{
			width: 100%;
			padding: 0 20px 0 17px;
			>li{
				padding-left: 20px;
				font-size: 12px;
				color: #666;
				height: 70px;
				line-height: 70px;
				cursor: pointer;
				border-bottom:1px solid #e5e5e5;
				>.hover{
					vertical-align: top;
				}
				>.hover:hover{
					color: #4277ff;
				}
				>span{
					display: inline-block;
					>.heng{
						display: inline-block;
						width: 1px;
						height: 17px;
						background-color: #4277ff;
						    transform: translateY(4px);
						    margin-right: 6px;
					}
				}
			}
		}
	}
</style>