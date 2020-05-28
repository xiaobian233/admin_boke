module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://mock.yonyoucloud.com/mock/7004', // 设置你调用的接口域名和端口号
                changeOrigin: true,     // 跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        port: 8000,
    },
    
}