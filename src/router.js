/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index/index'], resolve);
        }
    },
    '/sbbfs': {
        component(resolve){
            require(['./views/sbbfs/sbbfs'],resolve);
        }
    },
    '/sbjgcx': {
        component(resolve){
            require(['./views/sbjgcx/sbjgcx'],resolve);
        }
    },
    '/menu1': {
        component (resolve) {
            require(['./views/print/index'], resolve);
        },
        subRoutes: {
            'step1': {
                component (resolve) {
                    require(['./views/print/pages/step1'], resolve);
                }
            },
            'step2': {
                component (resolve) {
                    require(['./views/print/pages/step2'], resolve);
                }
            },
            'step3': {
                component (resolve) {
                    require(['./views/print/pages/step3'], resolve);
                }
            }
        }
    }
};
export default routers;