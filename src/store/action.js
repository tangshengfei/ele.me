import * as actions from "./mutations-type";
import api from "../services/index";
import { getStore, setStore } from "../common/utils";

const fetchData = (commit, name, ) => {

}

export const initDiscover = async ( { commit, state } ) => {
    let data ;
    // if (getStore(actions.INIT_DISCOVER)) {
    //     data = JSON.parse(getStore(actions.INIT_DISCOVER));
    // } else {
    //     data  = (await api.getStaticJson('discover')).data;
    //     setStore(actions.INIT_DISCOVER,data);
    // }

    data  = (await api.getStaticJson('discover')).data;

    commit(actions.INIT_DISCOVER, {
        entrys : data[1],
        disAds : data[2]
    });
}

export const initShopList = async ( { commit, state } ) => {

    let data ;
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

export const initEntries = async ( {commit, state} ) => {
    const { data } = await api.getStaticJson('entries');
    commit(actions.INIT_ENTRIES, {
        foodEntries: data[0].entries
    })
}