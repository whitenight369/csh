<template>
    <div class="CooperativePartneWrap">
        <div class="banner">
            <div class="areaTop">
                <div class="title">
                    律所党建
                </div>
                <div class="link">
                    <nuxt-link to="/">
                        查看更多&nbsp;
                        <span>
                            <img src='./../../static/images/banner/more.png' alt="">
                        </span>
                    </nuxt-link>
                </div>
            </div>
            <div class="items">
                <div class="item">
                    <img src="./../../static/images/banner/banner.png" alt="">
                    <div class="itemContent">
                        <div class="itemTitle">
                            中国共产党山东省第十二次代表大会关于十一届省委报告的决议
                        </div>
                        <div class="particulars">
                            中国共产党山东省第十二次代表大会批准李干杰同志代表中共山入贯彻落实习近平总书记对山东工作的重要指示要求，牢记嘱托…
                        </div>
                        <div class="webstat">
                            <div class="time">2023.10.02</div>
                            <div class="link">
                                <nuxt-link to="/">
                                    查看详情&nbsp;
                                    <span>
                                        <img src='./../../static/images/banner/more.png' alt="">
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="./../../static/images/banner/banner.png" alt="">
                    <div class="itemContent">
                        <div class="itemTitle">
                            中国共产党山东省第十二次代表大会关于十一届省委报告的决议
                        </div>
                        <div class="particulars">
                            中国共产党山东省第十二次代表大会批准李干杰同志代表中共山入贯彻落实习近平总书记对山东工作的重要指示要求，牢记嘱托…
                        </div>
                        <div class="webstat">
                            <div class="time">2023.10.02</div>
                            <div class="link">
                                <nuxt-link to="/">
                                    查看详情&nbsp;
                                    <span>
                                        <img src='./../../static/images/banner/more.png' alt="">
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="./../../static/images/banner/banner.png" alt="">
                    <div class="itemContent">
                        <div class="itemTitle">
                            中国共产党山东省第十二次代表大会关于十一届省委报告的决议
                        </div>
                        <div class="particulars">
                            中国共产党山东省第十二次代表大会批准李干杰同志代表中共山入贯彻落实习近平总书记对山东工作的重要指示要求，牢记嘱托…
                        </div>
                        <div class="webstat">
                            <div class="time">2023.10.02</div>
                            <div class="link">
                                <nuxt-link to="/">
                                    查看详情&nbsp;
                                    <span>
                                        <img src='./../../static/images/banner/more.png' alt="">
                                    </span>
                                </nuxt-link>
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
    name: "PartyBuilding"
}
</script>



<style scoped lang="less">
body,
html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
}



.CooperativePartneWrap {
    display: flex;
    justify-content: center;
    background-image: url(./../../static/images/PartyBuilding/lsdj.png) ;
    background-size:cover;
    padding-bottom: 156px;
    .banner {
        width: 1420px;
        // background-color: #99f;

        .areaTop {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 60px 0px 47px;

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

        .items {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;

            .item {
                width: 460px;

                img {
                    width: 100%;
                    height: 258px;
                }

                .itemContent {
                    padding: 26px 12px 40px 23px;
                    background-color: #fff;

                    .itemTitle {
                        font-size: 1.4rem;
                        line-height: 2.5rem;
                        font-weight: 500;
                        margin-bottom: 15px;
                    }

                    .particulars {
                        font-size: 1.2rem;
                        line-height: 1.6rem;
                        color: #999999;
                    }
                    .webstat{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 26px;
                        color: #999999;

                        .link {
                        img{
                            width: 10px;
                            height: 10px;
                            font-size: 1.2rem;
                        }
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
                }
            }
        }
    }
}
</style>