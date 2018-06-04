<template>
	<div class="FaqWarp">
		<p class="p1">常见问题</p>
		<p class="p2">FAQ</p>

		<div class="BomText">
			<p class="title">1.什么是市值(或者叫币值)，市值如何计算？</p>
			<p>数字货币的市值有点类似于股票的流通市值,它是通过价格乘以流通数量来计算的。</p>
			<p>市值=数字货币的当前价格*流通数量</p>
			<p class="title">2.不同种类的数字货币如何计算价格？</p>
			<p>由于数字货币在全球的多个交易平台都有交易，并且价格不同，本站的数字货币价格是通过每个市场上的成交量加权平均值来计算的。</p>
			<p>可以从每个数字货币详情页面的行情列表找到价格的来源。例如，以太坊的当前价格来自如下交易平台的加权价格： http://www.feixiaohao.com/currencies/ethereum/#marketticker。</p>
			<p class="title"> 3.“流通数量”，“总发行量”，“最大总量”之间有什么不同？</p>
			<p>流通数量最接近于流通在市场上的货币和普通大众手中货币数量</p>
			<p>总发行量是目前存在的所有货币数量（不包含已证实被骗走的部分货币）</p>
			<p>最大总量是最接近于数字货币的生命周期内可能存在的最大数量的货币</p>
			<p class="title"> 4.为什么决定使用流通数量来确定市值，而不是用总发行量？</p>
			<p>因为流通数量能更好的度量市值。货币是锁定的、预定的，是不能在公开市场上出售的，货币不会影响价格，因此也不允许影响市值。使用流通数量的方法就类似于使用股票流通股份来确定传统投资的市值。</p>
			<p class="title">5.“虚拟币”和“代币”的区别是什么？</p>
			<p>货币是可以独立运作的加密货币</p>
			<p>代币依赖于加密货币作为操作平台。检查加密资产清单可以查看资产列表和各自的平台</p>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>


<style lang="scss" scoped>
	.FaqWarp{
		width: 100%;
		>.p1{
			font-size: 20px;
			color: #333;
			font-weight: bold;
			margin-bottom: 20px;
		}
		>.p2{
			font-size: 14px;
			color: #b5b5b5;
			margin-bottom: 58px;
		}
		>.BomText{
			width: 100%;
			padding-right: 70px;
			font-size: 12px;
			color: #666;
			margin-bottom: 100px;
			>.title{
				margin-top: 47px;
			}
			>p{
				line-height:30px;
			}
		}
	}
</style>