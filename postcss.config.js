module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 1920,// 设计稿的宽度
            unitPrecision: 3,// 转换后保留的小数位数
            viewportUnit: 'vw',// 使用 vw 作为单位
            selectorBlackList: ['.ignore', '.hairlines'],// 不转换的类名
            minPixelValue: 1,// 小于等于 1px 的不转换
            mediaQuery: false// 不处理媒体查询中的单位
        }
    }
}