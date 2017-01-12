/**
 * Created by aresn on 16/7/18.
 */
import Env from './env';
import VueResource from 'vue-resource';
import Vue from 'vue';
import { Message,LoadingBar} from 'iview';


//请求拦截
Vue.http.interceptors.push( (request,next) => {
    if(mock) request.method = "GET";
    //请求发送前的处理逻辑
    //Message.loading("请求中...",0);
    LoadingBar.start();
    next( (response) => {
        //Message.destroy();
        LoadingBar.finish();
        return response;

    })
});
let mock = true,
    urlObj = {},
    url;

let baseUrl = {
    mockUrl: 'http://localhost:8080/src/',
    rootUrl: 'http://www.baidu.com/src/'
};

let api = {
    api1: 'mock/test',
    hdxxList: 'mock/hdxxList'
};

for (let key in api) {
    url = mock ? baseUrl.mockUrl + api[key] + '.json' : baseUrl.rootUrl + api[key];
    urlObj[key] = url;
}

let config = {
    env: Env,
    apiUrl: urlObj,
    SUCCCODE: "00000000",

    //请求资源
    service: {
        test: (requestData, callback) => {
            Vue.http({
                method: "post",
                url: config.apiUrl.api1,
                params: requestData
            }).then((response)=>{
                callback && callback(response);
            })
        },
        /**
         * getHdxxList
         * @param requestData
         * @param callback
         */
        getHdxxList: (requestData,callback) => {
            Vue.http({
                method: "post",
                url: config.apiUrl.hdxxList,
                params: requestData
            }).then((response)=>{
                callback && callback(response);
            })
        }
    }
};

export default config;