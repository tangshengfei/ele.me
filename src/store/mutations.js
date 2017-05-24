import Vue from "vue";
import * as actions from "./mutations-type";

// https://github.com/vuejs/vuex/issues/416
// 这里必须采用set方法,
// 调用数组的splice方法尝试主动触发刷新（极端情况下）

export const initDiscover = ( state, { entrys, disAds } ) => {
    Vue.set(state, 'entrys', entrys);
    Vue.set(state, 'disAds', disAds);
    // state.entrys.splice();
}

export const initShopList = ( state, { shopList } ) => {
    Vue.set(state, 'shopList', shopList);
}

export const initEntries = ( state, { foodEntries } ) => {
    Vue.set(state, 'foodEntries', foodEntries);
}

export const initOrderList = ( state, { orderList } ) => {
    Vue.set(state, 'orderList', orderList);
}

export const setTransition = ( state, { transitionName } ) => {
    transitionName && Vue.set(state, 'transitionName', transitionName);
}

export default {
    [actions.INIT_ENTRIES] : initEntries,
    [actions.INIT_DISCOVER] : initDiscover,
    [actions.INIT_SHOP_LIST] : initShopList
}