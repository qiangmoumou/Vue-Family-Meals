import axios from 'axios'


// 最终的方法
export function request(config) {
        // 1. 创建 axios 的实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000/api/v1',
            timeout: 5000
        })
        
        // 2. axios 的拦截器
        // 2.1 请求拦截
        instance.interceptors.request.use(config => {
//            console.log(config)
            // 1). 比如 config 中的一些信息不符合服务器的要求

            // 2). 比如每次发送网络请求时，都希望在界面中显示一个请求的图标

            // 3). 某些网络请求（比如登陆(token)）,必须携带一些特殊的信息

            return config
        }, err => {
            // console.log(err)
        });

        // 2.2 响应拦截
        instance.interceptors.response.use(res => {
            console.log(res)
            return res.data
        }, err => {
            console.log(err)
            return err
        });

        // 3. 发送真正的网络请求
        return instance(config)      // 这里本身返回的就是一个 Promise
}



// Promise的方案
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1. 创建 axios 的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000/api/v1',
//             timeout: 5000
//         })
        
//         // 发送真正的网络请求
//         instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })      
//     })
// }



// 第一种的封装   success 和 failure 当回调函数
// export function request(config, success, failure) {
//     // 1. 创建 axios 的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000/api/v1',
//         timeout: 5000
//     })
    
//     // 发送真正的网络请求
//     instance(config).then(res => {
//         // console.log(res)
//         success(res)
//     }).catch(err => {
//         // console.log(err)
//         failure(err)
//     })
    
// }



// 第二种的封装方式
// export function request(config) {
//     // 1. 创建 axios 的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000/api/v1',
//         timeout: 5000
//     })
    
//     // 发送真正的网络请求
//     instance(config.baseConfig).then(res => {
//         // console.log(res)
//         config.success(res)
//     }).catch(err => {
//         // console.log(err)
//         config.failure(err)
//     })
    
// }






