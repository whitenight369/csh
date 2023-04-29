<template>
  <div>
    <!-- 头部 -->
    <!-- <Head /> -->
    <!-- 轮播图 -->
    <Banner />
    <!-- 动向案例 -->
    <About />
    <!-- 查看详情 -->
    <Show />
    <!-- 专业领域 -->
    <Area />
    <!-- 公益 -->
    <PublicBenefit />
    <!-- 合作伙伴 -->
    <CooperativePartne />
    <!-- 党建 -->
    <PartyBuilding />
    <!-- 免费咨询 -->
    <Consult />
  </div>
</template>

<script>
import Head from '../components/headView/Head.vue';
import Banner from '../components/bannder/Banner.vue';
import About from '../components/bannder/About.vue';
import Show from '../components/bannder/Show.vue';
import Area from '../components/bannder/Area.vue';
import PublicBenefit from '../components/bannder/PublicBenefit.vue';
import CooperativePartne from './../components/bannder/CooperativePartner.vue';
import PartyBuilding from './../components/bannder/PartyBuilding.vue';
import Consult from './../components/bannder/Consult.vue';


export default {
    name: "IndexPage",
    components: { Head,Banner,About,Show,Area,PublicBenefit,CooperativePartne,PartyBuilding,Consult }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
body,html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
}
</style>