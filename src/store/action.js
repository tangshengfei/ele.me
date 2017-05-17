import * as actions from "./mutations-type";
import api from "../services/index";

export const initDiscover = async ( { commit, state } ) => {
    const { data } = await api.getStaticJson('discover');

    commit(actions.INIT_DISCOVER, {
        entrys : data[1],
        disAds : data[2]
    });
}

export const initShopList = async ( { commit, state } ) => {
    const { data } = await api.getStaticJson('shopList');

    commit(actions.INIT_SHOP_LIST, {
        shopList : data
    });
}

export const initEntries = async ( {commit, state} ) => {
    const { data } = await api.getStaticJson('entries');
    commit(actions.INIT_ENTRIES, {
        foodEntries: data[0].entries
    })
}