<template>
	
	<div>
		<div @click.capture='aaa($event,item.id)' :data-id='item.id' id='id' class="workBaseWarp" v-for='(item,index) in list' :key='index'>
			<div class="workBase bx">
				<div class="top">
					<p class="topOne">
						<span>{{item.title}}</span>
						<span data-id='call' @click='bb'>立即联系</span>
					</p>

					<p class="topTwo">
						<span>${{item.price}}/月</span>
						<span><img src="/static/img/work_icon_position.png"> &nbsp;{{item.position}}</span>
					</p>
					
				</div>
				<!-- bom -->
				<div class="bom">
					<p class="bomOne">
						<time>{{item.create_time}}</time>
						<span>{{item.address}} {{item.area}}</span>
					</p>
				</div>
			</div>


		</div>
	</div>

</template>


<script>
	import axios from 'axios'
	export default {
		data(){
			return({
				list:[]


			})
		},
		methods:{
			aaa(e,id){
				if(e.target.dataset.id == 'call'){
					console.log('bknjl')
					return
				}

				console.log(id)
				this.$router.push({path:`/details/${id}`,query:{g:3}})		

			},
			bb(e){

			}
		},

		created(){
			
			axios.get('https://time2.jglist.com/index.php?r=v2/magor/lists&auth_name=id&cate_id=0&grand_id=3&id=1&tx=3f556f66353c5945a3633ae209a3e0ff')
				.then(res=>{
					console.log(res.data.data)
					this.list = res.data.data
				})
			
		}
	}

</script>


<style scoped lang="scss">
.bx{
	box-sizing: border-box;
}

	.workBaseWarp{
		width: 100%;
		height: 32vw;
		border-bottom: 2.66vw solid #eee;
		>.workBase{
			width: 100%;
			height: 100%;
			padding:4vw 4vw 0; 
			>.top{
				height: 18.4vw;
				border-bottom: 1px solid #eee;
				font-size: 4vw;
				>.topOne{
					>:nth-child(1){
						color: #353535;
						display: inline-block;
						width: 70%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						word-wrap:break-word;
					}
					>:nth-child(2){
						display: inline-block;
						width: 16.8vw;
						height: 6.66vw;
						background-color: #ffa84b;
						color: #fff;
						font-size: 3.5vw;
						border-radius: 1vw;
						float: right;
						text-align: center;
						line-height: 6.66vw;
					}

				}
				>.topTwo{
						margin-top: 1vw;

					>:nth-child(1){
						color: #f15a4a;
					}
					>:nth-child(2){
						box-sizing: border-box;
						color: #999999;
						font-size: 2.66vw;
						line-height: 3.9vw;
						width: 50%;
						display: inline-block;

						float: right;
						>img{
							width: 2.93vw;
							height: 3.73vw;
							vertical-align: top;
						}
					}
				}
			}
			>.bom{
				height: 7.6vw;
				>.bomOne{
					font-size: 2.66vw;
					color: #999999;
					line-height: 8.8vw;
						>:nth-child(1){
						}
						>:nth-child(2){
							float: right;
						}
				}
			}
		}

	}
</style>