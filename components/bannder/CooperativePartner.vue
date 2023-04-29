<template>
    <div class="CooperativePartneWrap">
        <div class="title">
            合作伙伴
        </div>
        <div class="wire"></div>
        <div class="items">
            <div class="item">
                item
            </div>
            <div class="item">
                item
            </div>
            <div class="item">
                item
            </div>
            <div class="item">
                item
            </div>
            <div class="item">
                item
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: "CooperativePartne"
}
</script>



<style scoped lang="less">
body,html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
}
.CooperativePartneWrap {
    background-color: #FAFAFA ;
    padding: 60px 249px 194px;
    display: flex;
    align-items: center;
    flex-direction:column;
    .title {
        font-size: 2.8rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .wire{
        width: 4rem;
        height: 0.2rem;
        background-color: #B79A62;
    }
    .items{
        background-color: #fff;
        width: 1420px;
        margin-top: 4rem;
        padding: 64px 43px;
        box-sizing: border-box;
        display: flex;
        justify-content:space-between;
        .item{
            border: 1px solid #000;
            // width: 18%;
            width: 240px;
            background-color: #99f;
        }
    }
}</style>