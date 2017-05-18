import * as actions from "./mutations-type";
import api from "../services/index";
import { getStore, setStore } from "../common/utils";

/**
 * 初始化 发现页面头部的发现入口
 */
export const initDiscover = async ( { commit, state } ) => {
    let data ;
    if (getStore(actions.INIT_DISCOVER)) {
        data = JSON.parse(getStore(actions.INIT_DISCOVER));
    } else {
        data  = (await api.getStaticJson('discover')).data;
        setStore(actions.INIT_DISCOVER,data);
    }

    // data  = (await api.getStaticJson('discover')).data;

    commit(actions.INIT_DISCOVER, {
        entrys : data[1],
        disAds : data[2]
    });
}

/**
 * 初始化商铺列表
 */
export const initShopList = async ( { commit, state } ) => {

    let data ;
    // 缓存到local
    if (getStore(actions.INIT_SHOP_LIST)) {
        data = JSON.parse(getStore(actions.INIT_SHOP_LIST));
    } else {
        data  = (await api.getStaticJson('shopList')).data;
        setStore(actions.INIT_SHOP_LIST,data);
    }

    commit(actions.INIT_SHOP_LIST, {
        shopList : data
    });
}


/**
 * 初始化首页美食入口
 */
export const initEntries = async ( {commit, state} ) => {
    const { data } = await api.getStaticJson('entries');
    commit(actions.INIT_ENTRIES, {
        foodEntries: data[0].entries
    })
}

/**
 * 初始化订单列表
 */
export const initOrderList = async ( { commit, state } ) => {

    let data ;
    // 缓存到local
    if (getStore(actions.INIT_ORDER_LIST)) {
        data = JSON.parse(getStore(actions.INIT_ORDER_LIST));
    } else {
        data  = (await api.getStaticJson('order')).data;
        setStore(actions.INIT_ORDER_LIST,data);
    }

    // const { data } = await api.getStaticJson('order');

    commit(actions.INIT_ORDER_LIST, {
        orderList: data
    })

}