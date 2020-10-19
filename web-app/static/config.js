/*
 在 index.html 引入
 2018-04-17
 */

window.serverconf = {
  appId: 'test',
  appSecret: 'test',
  production: {
    // nginx 代理
    baseUrl: 'http://www.mxclass.cn',
    authUrl: 'http://www.mxclass.cn/auth',
    baseURL: 'http://www.mxclass.cn'
  },
  development: {
    baseUrl: 'http://192.168.101.10:8080',
    authUrl: 'http://192.168.101.10:18001/auth',
    baseURL: 'http://192.168.101.10:18000'
  }
}
