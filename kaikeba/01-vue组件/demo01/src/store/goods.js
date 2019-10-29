import gs from '@/service/goods';

export default {
    state: {
        slider: [],
        keys: [],
        goodsInfo: {}
    },
    getters: {
        goods: state => {
            return state.keys
                .map(key => state.goodsInfo[key])
                .reduce((prev, next) => [...prev, ...next], [])
        }
    },
    mutations: {
        setGoodsInfo(state, { slider, keys, goodsInfo }) {
            state.slider = slider;
            state.keys = keys;
            state.goodsInfo = goodsInfo;
        }
    },
    actions: {
        getGoods({ state, commit }) {
            if (!state.keys.length) {
                // 没有数据才去获取
                gs.getGoodsInfo().then(goodsInfo => {
                    commit('setGoodsInfo', goodsInfo)
                })
            }
        }
    },
    modules: {}
}