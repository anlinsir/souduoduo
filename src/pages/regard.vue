<template>
	<div class="warp">
		
		<header>
			<span @click='toIndex' class="back"><</span>
			<span>简购生活APP介绍</span>
			<p @click='goToIndex'>
				<img class="aa" src="/static/img/home_icon_home_gray.png">
			</p>

		</header>


		<main>
			<div class="regard">
				<h1>关于团队</h1>
				<p>简购生活源于互联网一群极客的旅游梦想。我们将数据挖掘技术、互联网的思维植入在线旅游，结合大数据，颠覆了国人的境外旅游方式。  </p>
				<p>简购生活致力于传递一种全新理念，打破旅行前做攻略、做计划，订酒店等旅行习惯，让旅行真正成为一种自由的，不被计划所束缚、放松心灵的历程。梦想旅行覆盖了全球150个热门城市，100万个POI，上亿条口碑点评，将庞大的数据量化繁为简为标签，便于每个人选择自己的所爱</p>
				<p>简购生活的几位创始人创立之初，其理念便获得了投资方认可，获得了1200万元的天使投资。梦想旅行Android和IOS客户端于4月上线，四个月累计用户突破十万人，先后被36氪、猎云网、网易新闻、重庆晚报等媒体报道推广。</p>
			</div>
		</main>



		<Footer />

	</div>

</template>


<script>
	import Footer from '../components/footer'

	export default{
		methods:{
				toIndex(){
				//this.$router.push('/index')
				//退后
				if(this.imgShow){
					this.imgShow = false
					return
				}
				history.back(1)

				
			},
			goToIndex(){
				this.$router.push('/index')
			}
		}
		,
		components:{
			Footer
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
			width: 100%;
			height: 11.73vw;
			border-bottom: 1px solid #eee;
			background-color: #fff;
			padding: 0 4vw;
			box-sizing: border-box;
			font-size: 4vw;
			text-align: center;
			line-height: 11.73vw;
			overflow: hidden;
				:nth-child(1){
				float: left;
				width: 10vw;
				display: inline-block;
			}
			:nth-child(3){
				float: right;
				:nth-child(1){
					transform: translateX(0vw);
					width: 7vw;
					margin-top: 2.5vw;
					display:inline-block;
				}
				.aa{
					display: inline-block;
					width: 8vw;
					margin-top: 2.5vw;


				}

			}
			.back{
				display: inline-block;
				width: 5vw;
				font-size: 8vw;
				color: #00d1b2;
			}

		}
		>main{
			flex:1;
			overflow: auto;
			background-color: #fff;
			>.regard{
				padding: 4vw 4vw 0;
				box-sizing: border-box;
				>h1{
					font-size: 4vw;
					margin-bottom: 3.2vw;
					font-weight: normal;
				}
				>p{
					font-size: 3.33vw;
					margin-bottom: 6vw;
				}
			}
		}
	}


</style>