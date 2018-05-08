<template>
	<header>
		<!-- @click='toSearch' -->
			<span @click='toIndex' v-if='left' :style="{color: color ? color : '' }"  class="back"><</span><input v-model='text' @click='toseac'  @keydown.enter='sendSearch'  type="text" placeholder="输入商家、商品名称" />
			<span class="posi" v-show='0'>dsdddsdsds</span>
	</header>

</template>



<script>
	export default {
		props:{			
			left:{
				type:String || Number
			},
			part:{
				type:Number|| String  || Object
			},
			color:{
				type:String
			}
		},
		data(){
			return({
				text:''
			})
		},
		methods:{
			// toSearch(){
			// 	if(this.$route.name != 'search'){
			// 		this.$router.push('/search')

			// 	}
			// }
			toseac(){
				this.$router.push('/search')
			},
			sendSearch(){//enter发请求  通过 子传夫  把拿到的数据  传到 searcb里面
					//吧类别 存到longstage里
					this.$router.push({ path:'/search'})
					console.log(this.part)
					this.$emit('show',true)
					localStorage.text = this.text
					if(!localStorage.text && localStorage.text != this.text){
						return
					}
						return
				if(this.text && this.part){
					this.$router.push({ path:'/search', query: { val:this.text , id:this.part} })
				}else{
					console.log('滑动搜索框，选择类别')
				}
			
			},
			toIndex(){
				if(this.$router.name != 'index'){
					this.$router.push('/index')
				}
			}
		}
	}


</script>


<style lang="scss" scoped>
	header{
		display: flex;
		width: 100%;
		height: 13.33vw;
		padding: 1.8vw 3.2vw;
		box-sizing: border-box;
		text-align: center;
		background-color: #04d6b6;
			>.back{
				display: inline-block;
				width: 5vw;
				color: #fff;
				height: 100%;
				line-height:10.33vw; 
				font-size: 8vw;
				margin-right: 5vw;
			}
			>input{
				width: 100%;
				border: none;
				background-color: #f3f3f3;
				height: 9vw;
				text-align: center;
				outline: none;
				font-size: 3.2vw;

			}
			.posi{
				position: absolute;
				top: 3.86vw;
				font-size: 4vw;
				left: 7.66vw;
			}
		
		

	}

</style>