<template>
	<footer>
			<dl>
				<dt><img src="/static/img/icon.png"></dt>
				<dd>
					<p>华人的生活百宝箱</p>
					<p>下载简购生活APP华人生活...</p>
				</dd>
								
			</dl>
			<button>立即下载APP</button>
		</footer>


</template>


<script>
	export default {
		data(){
			return({

			})
		}
	}


</script>



<style lang="scss" scoped>
		footer{
			width: 100%;
			height: 18vw;
			background-color: #fff;
			padding: 3.2vw 3.2vw 0 ;
			box-sizing: border-box;
			>dl{
				display: flex;
				float: left;
				>dt{
					width: 11.73vw;
					height: 11.73vw;
					>img{
						width: 100%;
						height:100%;

					}
				}
				>dd{
					margin-left: 3vw;
					:nth-child(1){
						font-size: 4vw;
						color: #333333;
					}
					:nth-child(2){
						font-size: 3.33vw;
						color: #00d1b2;
					}
				}
			}
			>button{
				float: right;
				width: 24.8vw;
				height: 8.53vw;
				margin-top: 1.2vw;
				background-color: #00d1b2;
				border-radius: 1vw;
				border: none;
				font-size: 2.93vw;
				color: #fff;
				margin-right: 4vw;
			}
		}

</style>