import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recom from '@/components/Recom'
import toplist from '@/components/toplist'
import toplistID from '@/components/toplistID'
import search from '@/components/search'
import searchID from '@/components/searchID'
import login from '@/components/login'
import register from '@/components/register'
import Hotsong from "../components/hotsong"
import Album from "../components/album"
import Zhaomu from "../components/zhaomu"
import Xuezhiqian from "../components/xuezhiqian"

Vue.use(Router)

export default new Router({
    mode:"history",
  routes: [
    {
        path:"/",
        component:Recom
    },
    {
        path:"/recom",
        component:Recom
    },
    //排行榜路由
    {
        path:"/toplist",
        component:toplist
    },
    {
        path:"/toplistid/:id",
        component:toplistID
    },
    //搜索路由
    {
         path:"/search",
        component:search
    },
    {
        path:"/search/:id",
        component:searchID
    },
    //登录路由
    {
        path:"/login",
        component:login
    },
    {
         path:"/register",
        component:register
    },
    //热歌路由
    {
      path:'/hotsong',
      component:Hotsong
    },
    {
      path:'/album/:id',
      component:Album
    },
    {
      path:'/zhaomu',
      component:Zhaomu
    },
    {
      path:'/xuezhiqian',
      component:Xuezhiqian
    },
  ]
})
