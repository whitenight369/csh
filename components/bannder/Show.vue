<template>
    <nuxt-link to="/">
    <div class="banner" >
        <img src='./../../static/images/banner/banner.png' alt="">
        <div class="title">
            华让律师
        </div>
        <el-button class="bannerBtn">查看详情</el-button>
    </div>
</nuxt-link>
</template>

<script >
export default {
    name: "Show"
}
</script>



<style scoped lang="less">
.banner {
    position: relative;

    img {
        width: 100%;
        height: 850px;
    }

    .title {
        margin: 47px 0px 0px 200px;
        color: #fff;
        font-weight: 600;
        position: absolute;
        font-size: 36px;
        top: 0px;
    }

    .bannerBtn {
        border: 2px solid #fff;
        z-index: 10;
        background-color: transparent;
        border-radius: 0%;
        width: 260px;
        height: 70px;
        font-size: 26px;
        position: absolute;
        color: #fff;
        bottom: 82px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .bannerBtn:hover {
        background-color: transparent;
        color: #F2E2AC;
    }
}
</style>