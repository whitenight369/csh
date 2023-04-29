<template>
    <div>
        <v-header />
        <main ref="container" class="content-container">
            <!-- 下面的nuxt就是展示的内容 -->
          <nuxt/>
        </main>
        <v-footer/>
    </div>
</template>

<script>
import VHeader from '@/components/headView/Head.vue';
import VFooter from '@/components/footerView/footer.vue';

// 默认展示的组件需要在这里注册一下
export default {
    components: {
        VHeader,
        VFooter
    }
}
</script>

<style scoped>
.content-container::after{
    display: table;
    content: '';
    clear: both;
}
</style>