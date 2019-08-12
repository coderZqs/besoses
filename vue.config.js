module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    //assetDir  将静态js scss
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: '148.70.80.173',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}