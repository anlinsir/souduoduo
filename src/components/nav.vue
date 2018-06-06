<template>
	<div class="NavWarp">
		<ul class="ul1">
			<li class="active">
				<ul>
					<li @click='changeActive(id)' v-for='(ii,id) in navList' :class="active1 == id ? 'active1' : '' " >{{ii}}</li>
					
				</ul>
			</li>
			<li v-if='input' class="input">
				<input type="text" :placeholder="placeholder">
				<span><img src="/static/img/search.png"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return({
				active1:0
			})
		},
		props:{
			navList:{
				type:Array
			},
			input:{
				type:String
			},
			placeholder:{
				type:String
			}
		},
		methods:{
			changeActive(index){
				this.$emit('choose',index)
				this.active1 = index
				
			}
		}
	}
</script>


<style scoped lang="scss">
	.NavWarp{
		width: 100%;
		background-color: #f2f2f2;
		height: 58px;
		>.ul1{
			width: 100%;
			display: flex;
			height: 58px;
			float: left;
			justify-content: space-between;
			>.active{
				>ul{
					display: flex;
					>.active1{
						
							background-color: #fff;
							border-top: 3px solid #4277ff;							
							color: #4277ff;
							
						}

					>li{
						font-size: 16px;
						width: 210px;
						text-align: center;	
						line-height: 58px;
						height: 58px;
					}
				}
			}
			>.input{
				width: 258px;
				margin-top: 12px;
				margin-right: 20px;
				position: relative;
				>input{
					width: 258px;
					height: 34px;
					border:none;
					border-radius: 15px;
					padding-left: 16px;
				}
				>span{
					position: absolute;
					top: 10px;
					right: 12px;
				}
			}

		}
	}
</style>