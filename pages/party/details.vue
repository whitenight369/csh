<template>
	<div class="container">
		<div class="search">
			<span class="bl"></span>
			<span class="title">华让律师</span>
			<div class="searchForm">
				<el-form :inline="true" class="demo-form-inline">
					<el-form-item>
						<el-input placeholder="审批人"></el-input>
					</el-form-item>
					<el-form-itemd>
						<el-select placeholder="活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-itemd>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">qk </el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="detail">
			<!-- 这个every也可以提取出来 -->
			<div class="every">
				<div class="avator"></div>
				<div class="info">
					<div class="nameAddress">
						<div class="name">Liransuo</div>
						<div class="address">北京</div>
					</div>
					<div class="job">
						<span class="text_17">律所主任</span>
						<span class="text_18">律所党委书记</span>
					</div>
					<span class="text_19">刑事、互联网与信息技术、知识产权、劳动与社会保障、银行与金融</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PartyDetails",
	data() {
		return {
			formInline: {
				user: "",
				region: "",
			},
		};
	},
	methods: {
		onSubmit() {
			console.log("submit!");
		},
	},
};
</script>

<style lang="less">
.container {
	width: 1420px;
	// height: 40px;
	margin: 31px 0 0 250px;
	.search {
		width: 1420px;
		height: 40px;
		display: flex;
		margin-bottom: 31px;
		.bl {
			background-color: rgba(183, 154, 98, 1);
			width: 3px;
			height: 30px;
			margin-top: 5px;
		}
		.title {
			width: 96px;
			height: 33px;
			overflow-wrap: break-word;
			color: rgba(51, 51, 51, 1);
			font-size: 24px;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			white-space: nowrap;
			line-height: 33px;
			margin: 3px 0 0 20px;
		}
		.searchForm {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 2px;
			height: 40px;
			// border: 1px solid rgba(230, 230, 230, 1);
			margin-left: 461px;
		}
	}
	.detail {
		display: flex;
		flex-wrap: wrap;
		.every {
			border: 1px solid rgba(230, 230, 230, 1);
			margin-right: 10px;
			margin-bottom: 18px;
			.avator {
				background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f48a5262d4a64c9ca4e7006e6300e632_mergeImage.png);
				background-size: cover;
				// position: absolute;
				// left: 0;
				top: -53px;
				width: 340px;
				height: 453px;
				border: 1px solid rgba(230, 230, 230, 1);
			}
			.info {
				margin: 0 0 0 19px;
				width: 303px;
				// height: 42px;
				.nameAddress {
					display: flex;
					justify-content: space-between;
					.name {
						width: 90px;
						height: 42px;
						overflow-wrap: break-word;
						color: rgba(183, 154, 98, 1);
						font-size: 30px;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						text-align: left;
						white-space: nowrap;
						line-height: 42px;
					}
					.address {
						width: 28px;
						height: 20px;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 14px;
						font-family: PingFangSC-Regular;
						// font-weight: NaN;
						text-align: center;
						white-space: nowrap;
						line-height: 20px;
						margin-top: 17px;
						margin-right: 10px;
					}
				}
				.job {
					display: flex;
					justify-content: space-between;
					span {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 14px;
						font-family: PingFangSC-Regular;
						// font-weight: NaN;
						// text-align: left;
						white-space: nowrap;
						line-height: 20px;
					}
				}
				.text_19 {
					width: 303px;
					// height: 40px;
					overflow-wrap: break-word;
					color: rgba(153, 153, 153, 1);
					font-size: 14px;
					font-family: PingFangSC-Regular;
					// font-weight: NaN;
					text-align: left;
					// line-height: 20px;
					// margin: 12px 0 0 18px;
				}
			}
		}
	}
}
</style>
