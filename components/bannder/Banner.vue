<template>
    <div class="banner">
        <div class="block">
            <el-carousel height="785px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src='./../../static/images/banner/banner.png' alt="" style="height:100%; width:100%; object-fit:cover;">

                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="bannerRelation">
                <div text="北京华让律师事务所" class="text1">北京华让律师事务所</div><br />
                <div text="行业领先的律师事务所，拥有超过20年的经验" class="text2">行业领先的律师事务所，拥有超过20年的经验</div><br />
                <el-button class="bannerBtn">立即联系</el-button>
        </div>
    </div>

    <!-- </div> -->
</template>

<script >
import Vue from 'vue';
import { Carousel } from 'element-ui';

Vue.use(Carousel, { height: '800px' });
export default {
    name: "Banner"
}
</script>



<style scoped lang="less">
.banner {
    position: relative;
    // margin-top: 100px;
}

// .el-carousel__indicators--horizontal,.el-carousel__indicators{
//     bottom: 50px !important;
// }
// .el-carousel__indicator.my-indicator {
//   background-color: red;
// }
// .el-carousel__indicators, .el-carousel__indicators--horizontal{
//     bottom:100px;
// }



.bannerRelation {
    top: 0;
    position: absolute;
    // top: -30vw;
    font-size: 10px;
    text-align: center;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.text1,
.text2 {
    background-image: linear-gradient(to right, #F2E2AC, #BF9162);
    -webkit-background-clip: text;
    color: transparent;
}

.text1 {
    font-size: 60px;
}

.text2 {
    font-size: 32px;
}

.bannerBtn {
    padding: 0px;
    border: 0.16vw solid #fff;
    z-index: 10;
    background-color: transparent;
    color: #fff;
    // width: 120px;
    // font-size: 1.4vw;
    // height: 3.66vw;
    line-height: 3.66vw;
    border-radius: 0%;
    margin-top: 6vw;

    width: 260px;
    height: 70px;
    font-size: 26px;
}

.bannerBtn:hover {
    background-color: transparent;
    color: #F2E2AC;

}

.el-carousel__indicators--horizontal {
    bottom: 22px !important;
}</style>