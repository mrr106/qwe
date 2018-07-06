<template>
  <div>
  <div class="top" v-if = "top">  
    <img :src="top.topinfo.pic_album">
    <h3>{{top.topinfo.ListName}}</h3>
    <p>第{{top.day_of_year}}天</p>
    <p>{{top.date}}更新</p>
    <div class="content">
        <button class="mint-button mint-button--primary mint-button--large" v-show="!playwhat"  @click='autoplay(0),ifplay=false,font=false,playmusic(0)'><!----> 
        <label class="mint-button-text">播放全部</label>
        </button>
      <i class="iconfont icon-iconset0481" v-if="!ifplay" v-show="!realshow" @click="playmusic(isshoworhide)"></i>
      <i class="iconfont icon-bofang" v-if="!ifplay" v-show="realshow" @click="playmusic(isshoworhide)"></i>
    </div>
</div>

  <audio v-if = "playwhat" :src="playwhat" autoplay loop></audio>
  <div class="inside">排行榜 共{{list.length}}首</div>
  <ul v-if = "list" @click="ifplay=false">
    <li v-for="data,index in list" @click="autoplay(index),playmusic(index),isshoworhide=index" class="changecolor">
      <h3 class="index">{{index+1}}</h3>
      <h3>{{list[index].data.albumname}}</h3>
      <p>{{list[index].data.singer[0].name}}</p>
    </li>
  </ul>

</div>
</template>

<script>
import axios from "axios";
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
      list:'',
      top:'',
      misicurl:'',
      playwhat:'',
      songmid:"",
      qqq:'',
      font:true,
      ifplay:true,
      issame:0,
      isshoworhide:0,
      realshow:true,
    }
  },
  //musicurl[2].purl
  computed:{

  },
  methods:{
    autoplay(res){
      if(this.musicurl.length!==0){
      this.playwhat=this.musicurl[res].purl
     }else{}
    },
    ishow(){
        
        return this.list[this.isshoworhide].isPlay
    },
    playmusic(res){
        
        this.list[res].isPlay = !this.list[res].isPlay
        
        var audio =document.querySelector('audio');
        if (this.issame!==res) {
            if (this.list[res].isPlay==true) {
            audio.play();
            audio.autoplay = true;
            this.list[this.issame].isPlay=false
            this.realshow = true
  //bug****************************************************************************************
            }else{audio.pause();audio.autoplay = false;this.realshow = false}
          this.issame=res
        }else{
          if (this.list[res].isPlay==false) {
            audio.pause();audio.autoplay = false;
            this.realshow = false
            }else{audio.play();
            audio.autoplay = true;
          this.realshow = true}
        }

        console.log(this.list[res].isPlay)
    },

  },
  mounted(){
      var id = this.$route.params.id

      axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${id}&_=1530622626344`).then(res=>{
        // console.log(res.data.songlist)
        this.list=res.data.songlist;

        for(var i in this.list){
          this.list[i].isPlay = false;
        }
        
        this.top=res.data
        for(var i=0;i<res.data.songlist.length;i++){
        this.songmid += '"'+res.data.songlist[i].data.songmid+'",'
        }
        this.songmid=(this.songmid.substring(this.songmid.length-1)==',')?this.songmid.substring(0,this.songmid.length-1):this.songmid;
          // this.songmid = this.songmid.split(",");
//         console.log(`{"comm":{"g_tk":5381,"uin":0,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"url_mid":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6469908836","songmid":[${this.songmid}],"songtype":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"uin":"0","loginflag":0,"platform":"23"}}}
// `)
        // console.log(this.songmid)
        // console.log(this.list)
        // console.log(this.top)
                  axios.post(`/cgi-bin/musicu.fcg?_=1530667756628`,`{"comm":{"g_tk":5381,"uin":0,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"url_mid":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6469908836","songmid":[${this.songmid}],"songtype":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"uin":"0","loginflag":0,"platform":"23"}}}`).then(res=>{
        
        this.musicurl = res.data.url_mid.data.midurlinfo

      }).catch(error=>{console.log(error)})
                })


      //https://u.y.qq.com/cgi-bin/musicu.fcg?_=1530667756628
      }
    }
    
  

</script>

<style src="../../static/font/iconfont.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  float:left;
  width: 40%;
  height: 20%;
  margin-top: 3%;
  margin-left: 3%;
}
.top{
  padding-bottom: 6%;  
  overflow: hidden;
  background: rgba(0,0,0,.5);
}
.top h3{
  position: relative;
  left: 3%;
  margin-top: 5%;
}
.top p{
  position: relative;
  left: 3%;
  margin-top: 5%;
}
ul{list-style: none;
  .index{float: left;color:red;margin-left: 4%;margin-top: 2%}
  h3{margin-left: 14%;margin-top: 5%;}
  p{margin-left: 14%;margin-top: 1%;}
}
.inside{
  margin-left: 5%;
  margin-top: 5%;
}
.mint-button{
display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 170px;
    height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: #31c27c;
    margin-top: 6.6%;
   
}
.changecolor:hover{
  color: #31c27c;
}
.iconfont{
font-size: 60px;
    position: relative;
    top: 3px;
    left: -250%;
}
.content{
  display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    margin-top: 15%;
    margin-left: 0%;
    margin-bottom: 1%
}

</style>