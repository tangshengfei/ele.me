import Vue from 'vue';
import App from '@/App';

import Home from '@/page/Home.vue';
import Discover from '@/page/discover/index';
import Profile from "@/page/profile/index"
import Order from "@/page/order/index"
import Shop from "@/page/shop/index";
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
            component: Order
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
            path: '/shopInfo',
            component: ShopInfo
        },
        {
            path: '/breakfirst',
            component: BreakFirst
        }
    ]
}];
