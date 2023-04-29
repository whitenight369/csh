<template>
    <header>
        <div class="head">
            <div class="center-box">
                <div class="logo">
                     <img src='./../../static/images/head/logo.png' alt>
                </div>
            </div>
            <div class="nav">
                <ul>
                    <!-- li小于878变形，注意设置媒体查询 -->
                    <nuxt-link to="/">
                        <li>
                            <div>首页</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/party">
                        <li>
                            <div>华让律师</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/">
                        <li>
                            <div>华让动向</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/case">
                        <li>
                            <div>华让案例</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/territory">
                        <li>
                            <div>专业领域</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/about">
                        <li>
                            <div>关于我们</div>
                        </li>
                    </nuxt-link>
                    <nuxt-link to="/join">
                        <li>
                            <div>加入我们</div>
                        </li>
                    </nuxt-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

</script>

<style scoped lang="less"> 
.body {
     margin: 0;
     padding: 0;
 }

 .head {
     width: 100%;
    //  position: fixed;
    //  left: 0;
    //  top: 0;
     z-index: 99;
     background-color: #ffffff;
     display: flex;
     justify-content: space-around;
     align-items: center;
     box-shadow: 0px 0px 3px 0px rgba(165, 165, 165, 0.5);

     .logo {

         img {
            //  width: 151px;
             cursor: pointer;
             width: 281px;
             height: 49px;
         }
     }

     .nav {

         ul {
             padding: 0;
             margin: 0;
             white-space: nowrap;

             a:link,
             a:visited {
                 color: #333;
                 text-decoration: none;
             }

             li {
                 box-sizing: border-box;
                 border-top: 6px solid transparent;
                 display: inline-block;
                 text-decoration: none;
                //  width: 50px;
                //  height: 50px;
                width: 100px;
                height: 100px;
                line-height: 100px;
                font-size: 18px;


                 text-align: center;
                //  line-height: 50px;
                //  font-size: 10px;
                 font-weight: 500;
                 font-family: PingFangSC-Medium, PingFang SC;
                 margin: 0px 2px;

                 div {
                     position: relative;
                     top: -8px;
                 }
             }

             li:hover {
                 border-top: 6px solid #B79A62;
                 background-color: rgba(247, 244, 239, 1);
             }
         }
     }
 }

 .shiyan {
     background-color: #99f;
     width: 1rem;
 }</style>