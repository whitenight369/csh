<template>
    <div class="areaWrap">
        <div class="banner">
            <div class="areaTop">
                <div class="title">
                    专业领域
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
            <div class="fieldIntroduction">
                <div class="box">
                    <img src="./../../static/images/area/internet.png" alt="">
                    <div class="boxTitle">
                        互联网与信息技术
                    </div>
                    <div class="boxEn">
                        Internet and Information Technology
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/clearing.png" alt="">
                    <div class="boxTitle">
                        企业破产重整与清算
                    </div>
                    <div class="boxEn">
                        Bankruptcy & Liquidation
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/criminal.png" alt="">
                    <div class="boxTitle">
                        刑事
                    </div>
                    <div class="boxEn">
                        Criminal
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/labourProtection.png" alt="">
                    <div class="boxTitle">
                        劳动与社会保障
                    </div>
                    <div class="boxEn">
                        Labor and social security
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/housework.png" alt="">
                    <div class="boxTitle">
                        婚姻家事与财富管理
                    </div>
                    <div class="boxEn">
                        Marriage & Wealth
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/intellectualProperty.png" alt="">
                    <div class="boxTitle">
                        知识产权
                    </div>
                    <div class="boxEn">
                        Intellectual property
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/lawsuit.png" alt="">
                    <div class="boxTitle">
                        诉讼与仲裁
                    </div>
                    <div class="boxEn">
                        litigation & Arbitration
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/financial.png" alt="">
                    <div class="boxTitle">
                        银行与金融
                    </div>
                    <div class="boxEn">
                        Banking & Finance
                    </div>
                </div>
                <div class="box">
                    <img src="./../../static/images/area/others.png" alt="">
                    <div class="boxTitle">
                        其它
                    </div>
                    <div class="boxEn">
                        Others
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
    // background-color: pink;
    display: flex;
    justify-content: center;

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
                    font-size: 14px;
                    color: #B79A62;
                    text-decoration: none;
                    padding-bottom: 7px;
                    border-bottom: 1px solid #B79A62;
                    margin-left: 45px;
                }
            }
        }

        .fieldIntroduction {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex:0 1 32%;
            margin: 60px 0px 76px;
            .box {
                width: 460px;
                height: 200px;
                border: 1px solid #E6E6E6 ;
                display: flex;
                flex-direction:column;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
                img {
                    width: 4.3rem;
                    height: 4.3rem;
                    margin-bottom: 2rem;
                }

                .boxTitle {
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 2.2rem;
                    margin-bottom: 0.5rem;
                }

                .boxEn {
                    font-size: 1.4rem;
                    font-weight: 400;
                    line-height: 2rem;
                    color: #999999;
                }
            }
            .box:hover {
                box-shadow: 0px 0px 20px #999999;
            }
        }
    }
}</style>