// 用vite创建项目，配置postcss需要使用post.config.js，之前使用的.postcssrc.js已经被抛弃
// 具体配置可以去postcss-pxtorem仓库看看文档
module.exports = {
    "plugins": {
        "postcss-pxtorem": {
            rootValue: 37.5, // Vant 官方根字体大小是37.5
            propList: ['*'],
            selectorBlackList: ['.norem']
            // 过滤掉.norem-开头的class，不进行rem转换
        }
    }
}