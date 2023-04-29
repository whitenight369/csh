<template>
    <div class="areaWrap">
        <div class="banner">
            <div class="areaTop">
                <div class="title">
                    华让公益
                </div>
                <div class="link">
                    <nuxt-link to="/">
                        查看详情&nbsp;
                        <span>
                            <img src='./../../static/images/banner/more.png' alt="">
                        </span>
                    </nuxt-link>
                </div>
            </div>
            <div class="content">
                <div class="contentLeft">
                    <img src="./../../static/images/banner/banner.png" alt="">
                </div>
                <div class="contentRight">
                    <div class="items">
                        <img src="./../../static/images/banner/banner.png" alt="">
                        <div class="text">
                            <div class="itemTitle">
                                3月新规规规规规规规规规规规规
                            </div>
                            <div class="day">
                                2023.3.6
                            </div>
                        </div>
                    </div>
                    <div class="items">
                        <img src="./../../static/images/banner/banner.png" alt="">
                        <div class="text">
                            <div class="itemTitle">
                                3月新规规规规规规规规规规规规
                            </div>
                            <div class="day">
                                2023.3.6
                            </div>
                        </div>
                    </div>
                    <div class="items">
                        <img src="./../../static/images/banner/banner.png" alt="">
                        <div class="text">
                            <div class="itemTitle">
                                3月新规规规规规规规规规规规规
                            </div>
                            <div class="day">
                                2023.3.6
                            </div>
                        </div>
                    </div>
                    <div class="items" style="border-bottom: none;padding-bottom:0px;margin-bottom:0px;">
                        <img src="./../../static/images/banner/banner.png" alt="">
                        <div class="text">
                            <div class="itemTitle">
                                3月新规规规规规规规规规规规规
                            </div>
                            <div class="day">
                                2023.3.6
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script >
export default {
    name: "Area"
}
</script>



<style scoped lang="less">
body,html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
}
.areaWrap {
    background-color: pink;
    display: flex;
    justify-content: center;
    background-image: url(./../../static/images/banner/banner.png);

    .banner {
        width: 1420px;
        // background-color: #99f;

        .areaTop {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 60px;

            .title {
                font-size: 2.9rem;
                font-weight: 600;
                padding-left: 20px;
                line-height: 50px;
                border-left: 2px solid #B79A62;
            }

            .link {

                a:link,
                a:visited {
                    font-size: 1.2rem;
                    color: #B79A62;
                    text-decoration: none;
                    padding-bottom: 7px;
                    border-bottom: 1px solid #B79A62;
                    margin-left: 45px;
                }
            }
        }
        .content{
            margin: 50px 0px;
            display: flex;

            .contentLeft{
                img{
                    width: 920px;
                    // height: 500px;
                }
            }
            .contentRight{
                flex: 1;
                margin:0px 0px 0px 10px;
                padding: 12px 10px 0px;
                background-color: #fff;
                .items {
                    display: flex;
                    margin:20px 15px;
                    padding-bottom: 15px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #eee;

                    img {
                    width: 150px;
                    height: 76px;
                    margin-right:10px;
                }
                .text{
                    display: flex;
                    flex-direction:column;
                    justify-content:space-between;
                    .day{
                        color: #999;
                    }
                }
                }
                
            }
        }
      
    }
}</style>