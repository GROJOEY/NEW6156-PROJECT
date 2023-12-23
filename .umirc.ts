import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Login/index' },
    { path: '/login', component :'@/pages/Login/index'},
    { path: '/product', component :'@/pages/Product/index'},
    { path: '/create', component :'@/pages/Create/index'},
    { path: '/order', component :'@/pages/Order/index'}
  ],
  proxy: {
    '/api': {
      target: 'http://34.132.102.197:80',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    "/ci": { // 标识需要进行转换的请求的url
      "target": "https://vjvraka4zxpetzucol3y776tim0qwmob.lambda-url.us-east-1.on.aws/?PersonId=2&ProductId=2", // 服务端域名
      "changeOrigin": true, // 允许域名进行转换
      "pathRewrite": { "^/ci": ''}  // 将请求url里的ci去掉
     },
     "/product" : {
      "target" : "https://product-microservice-406302.uc.r.appspot.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/product": ''}
     },
     "/order" : {
      "target" : "http://35.184.142.210:8080",
      'changeOrigin': true,
      'pathRewrite': { '^/order': '' },
     },
  },
  fastRefresh: {},
});