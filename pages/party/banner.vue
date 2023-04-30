<!-- 1.party/banner.vue 可以抽离成一个 common 的 banner 但是我不会 vue 的传参 需要自己写一下 基本上几个页面的 banner 都是这个样式 -->
<template>
	<div class="bannerContainer">
		<!-- 下面的title和detail设置成参数就ok了 -->
		<span class="bannerTitle">华让律师</span>
		<span class="bannerDetail"
			>行业领先的律师事务所。拥有超过20年的经验。律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容。<br /><br />律师事务所简介内容律师事务所简介内容律师事务所简介内容律师事务所简介内容。</span
		>
	</div>
</template>

<script>
export default {
	name: "PartyBanner",
};
</script>

<style lang="less">
.bannerContainer {
	background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/657038d68a1f426aa8a2b854d543b0b8_mergeImage.png) 100%;
	width: 100%;
	height: 400px;
	background-size: contain;
	display: flex;
	flex-direction: column;
	.bannerTitle {
		width: 192px;
		height: 71px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 48px;
		font-family: SourceHanSansSC-Bold;
		font-weight: 700;
		text-align: left;
		white-space: nowrap;
		line-height: 71px;
		margin: 99px 0 0 250px;
	}
	.bannerDetail {
		width: 757px;
		height: 96px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		font-family: PingFangSC-Regular;
		// font-weight: NaN;
		text-align: left;
		line-height: 24px;
		margin: 29px 0 105px 250px;
	}
}
</style>
