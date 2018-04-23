<template>
	<div>
		<ul v-show='sets'>
			<li @click='toDetali' :data-id='item.id' v-for='(item,index) in data' :key='index'>
				<dl :data-id='item.id'>
					<dt><img :data-id='item.id' :src="item.image + '200_200.jpg'"></dt>
					<dd :data-id='item.id'>
						<p :data-id='item.id'><span :data-id='item.id'>置顶</span> <span :data-id='item.id'>{{item.title}}</span></p>
						<p :data-id='item.id'><span :data-id='item.id'>${{item.price}}</span><span :data-id='item.id'>{{item.type}}</span></p>
						<p :data-id='item.id'><span :data-id='item.id'>{{item.city}}</span> <span :data-id='item.id'>{{item.area}}</span> <span :data-id='item.id'>{{item.create_time}}</span></p>
					</dd>
				</dl>
			</li>
		</ul>
		<p v-show='!sets'>loading...</p>
	</div>

</template>



<script>
	export default {
		props:{
			data:{
				type:Array
			}
		},
		data(){
			return({
				newData:null,
				sets:0
			})
		},
		methods:{
			toDetali(e){
				this.$emit('detali',e.target.dataset.id)
				

			}
		},
		mounted(){
			if(!this.data.length){
				var timer =  setInterval(()=>{

			 		if(this.data.length){ clearInterval(timer) ;this.sets = 1}
			 		this.newData = this.data
			 		
			 		console.log(this.newData) 
		 		},100)		
			 }
			 if(this.data.length){this.sets = 1}

		
		}
	}
</script>


<style lang="scss" scoped>
	ul{
		width: 100%;

		>li{
			border-top: 1px solid #eee;
			height: 28.53vw;
			padding: 4vw 0;
			box-sizing: border-box;
			>dl{
				display: flex;
				>dt{
					width: 20.53vw;
					height: 20.53vw;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				>dd{
					width: 60vw;
					margin-left: 4vw;

					height: 20.53vw;
					
					>p{
						width: 68vw;
						margin-bottom: 3vw;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						font-size: 4vw;
					}
					:nth-child(1){
						:nth-child(1){
							display: inline-block;
							width: 7.2VW;
							height: 4vw;
							font-size: 2.53vw;
							background-color: #ffef07;
							color: #6f3f15;
							text-align: center;
							line-height: 4vw;

						}
						:nth-child(2){
							color: #353535;
						}



					}
					:nth-child(2){
						:nth-child(1){
							color: #f15a4a;
							font-size: 3.33vw;
						}
						:nth-child(2){
							float: right;
						}

					}
					:nth-child(3){
						color: #999;
						font-size: 2.66vw;
						:nth-child(1){}
						:nth-child(2){}
						:nth-child(3){
							float: right;
						}

					}

				}
			}
		}
	}

</style>