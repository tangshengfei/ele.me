import App from '@/App';

import Home from '@/page/Home.vue';
import Discover from '@/page/discover/index';
import Profile from "@/page/profile/index"

// import Order from "@/page/order/index";
import Order from "@/page/order/list";
import OrderInfo from "@/page/order/info";

import Shop from "@/page/shop/list";
import ShopInfo from "@/page/shop/info";

import BreakFirst from "@/page/breakfirst/index";

export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            redirect: '/home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/discover',
            component: Discover
        },
        {
            path: '/order',
            component: Order,
            exact: true ,
            // 两种动画方案，注意配合router-view组件使用
            // children: [
            //     {
            //         path: '/order/info',
            //         name: 'orderInfo',
            //         component: OrderInfo
            //     }
            // ]
        },
        {
            path: '/order/info',
            name: 'orderInfo',
            component: OrderInfo
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/shop',
            component: Shop
        },
        {
            path: '/shop/info',
            name:'shopInfo',
            component: ShopInfo
        },
        {
            path: '/breakfirst',
            component: BreakFirst
        }
    ]
}];
