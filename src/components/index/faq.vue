<template>
	<div class="faqWarp">
		<ul class="faqLeft">
			<li @click='changeFaq(index)' :class="active==index? 'active' : '' "  v-for='(item,index) in leftList'>
				<div v-if='active==index' class="heng"></div>
				{{item}}
			</li>
		
		</ul>


		<div class="faqRight">
			 <router-view />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return({
				leftList:['关于我们','联系我们','常见问题'],
				active:0
			})
		},
		methods:{
			changeFaq(index){
				this.active = index
				switch (index){
					case 0:
						this.$router.push('/index/faq/about')
						console.log('5')
						break;
					case 1:
						
					this.$router.push('/index/faq/call')
						console.log('5')
						break;
					case 2:
					this.$router.push('/index/faq/faq')
						console.log('5')
						break;
				}
			}
		},
		mounted(){
			document.documentElement.scrollTop =0
		}
	}
</script>


<style lang="scss" scoped>
	.faqWarp{
		width: 100%;
		min-height: 100px;
		overflow: hidden;
		>.faqLeft{
			width: 320px;
			margin-right: 14px;
			float: left;
			>:nth-last-child(1){
				border-bottom:1px solid #e5e5e5;

			}
			>.active{
				color: #4277ff;
			}
			>li{
				border:1px solid #e5e5e5;
				width: 100%;
				font-size: 16px;
				height: 60px;
				line-height: 60px;
				position:relative;
				padding-left: 30px;
				color: #333;
				border-bottom: none;
				>.heng{
					float: left;
					margin-right: 7px;
					transform: translateY(22px);
					height: 16px;
					width: 2px;
					background-color: #4277ff;
				}
			}
		}
		>.faqRight{
			float: right;
			width: 866px;
			min-height: 835px;
			border:1px solid #e5e5e5;
			background-image: url('/static/img/faqbg.png');
			background-repeat: no-repeat;
			background-position: -44px -52px;
			border-top:3px solid #4277ff;
			padding: 80px 0 0 65px;

		}
	}

</style>