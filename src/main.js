/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';
import config from './config/config';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueResource);


//请求拦截
Vue.http.interceptors.push((request,next) => {
    if(config.mock) request.method = "GET";
    //请求发送前的处理逻辑
    //Message.loading("请求中...",0);
    iView.LoadingBar.start();
    next( (response) => {
        //Message.destroy();
        iView.LoadingBar.finish();
        return response;
    })
});
// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: false
});

router.map(Routers);

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {
});

router.redirect({
    '*': "/index"
});

router.start(App, 'app');