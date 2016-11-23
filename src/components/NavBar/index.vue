<template>
	<div class="nav-bar">
		<router-link to="/home">首页</router-link>
		<router-link to="/my">我的</router-link>
		<router-link to="/order">订单</router-link>
		<router-link to="/consult">咨询</router-link>
	</div>
</template>
<style lang="less">
	@import '../../asserts/less/base';
	.nav-bar {
		.flex-between();
		.brd();
		height: 40px;
		a:extend(.tc, .h100){
			.flex-center();
			flex: 1;
			&.router-link-active,
			&:active {
				background-color: darken(#fff, 10%);
			}
		}
	}
</style>