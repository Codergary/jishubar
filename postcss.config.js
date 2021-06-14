// PostCSS配置文件
module.exports = {
  plugins: {

    // 将px转为rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
