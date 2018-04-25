<template>
	<div>
		<ul>
			<li>
				<dl>
					<dt><img src="#"></dt>
					<dd>
						<div class="top">
							<p class="title"><span>推荐</span><span>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span></p>
							<p class="star"><span>星星0.0</span><span>评论xxx条</span></p>
							<p class="where"><span>xx|xx</span><span>$$$||mmm</span></p>
						</div>
						<!-- 一条线 -->
						<div class="more" :class="show ? 'ismore' : ''" >
							<p>活动一 <span @click='showMore' id='more' >8个活动▼</span></p>
							<p>活动一</p>
							<p>活动一</p>
							<p>活动一</p>

						</div>
					</dd>
				</dl>
			</li>
		</ul>

	</div>


</template>


<script>
	export default {
		data(){
			return({
				show:false,
		
			})
		},
		methods:{
			showMore(){

				this.show = !this.show
			}
		}
	}
</script>



<style scoped lang="scss">
.ismore{
	height: 20vw !important;
}
	ul{
		width: 100%;
		
		>li{
			padding: 4vw 0;
			min-height: 36.66vw;
			box-sizing: border-box;
			border-top: 1px solid;
			border-bottom: 1px solid;
			font-size: 2.66vw;
			color: #666666;
			>dl{
				display: flex;
				>dt{
					width: 17.33vw;
					height: 17.33vw;
					margin-right: 2.66vw;
					>img{
						width: 17.33vw;
						height: 17.33vw;
					}
				}
				>dd{
					width: 80%;
					>.top{
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 17.33vw;
						>.title{
							overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap;
							>:nth-child(1){
								margin-right: 1.6vw;
							}
						}

					}
					>.more{
						height: 5vw;
						overflow: hidden;
					}
				}
			}
		}

	}
	

</style>