<template>
  <div>
  <div class="top" v-if = "top"><img :src="top.topinfo.pic_album"><h3>{{top.topinfo.ListName}}</h3><p>第{{top.day_of_year}}天</p><p>{{top.date}}更新</p>
  <button class="mint-button mint-button--primary mint-button--large" @click='play(0)'><!----> <label class="mint-button-text">播放全部</label></button></div>
  <audio v-if = "playwhat" :src="playwhat" autoplay controls loop></audio>
  <div class="inside">排行榜 共{{list.length}}首</div>
  <ul v-if = "list">
    <li v-for="data,index in list" @click="play(index)"><h3 class="index">{{index+1}}</h3><h3>{{list[index].data.albumname}}</h3><p>{{list[index].data.singer[0].name}}</p></li>
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
    }
  },
  //musicurl[2].purl
  methods:{
    play(res){
      if(this.musicurl.length!==0){
      this.playwhat=''
      this.playwhat=this.musicurl[res].purl
     }else{}
    }
  },
  mounted(){
      var id = this.$route.params.id
      //https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1530622921715
      //https://szc.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1530622946727
      //https://u.y.qq.com/cgi-bin/musicu.fcg?_=1530666957157
      axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${id}&_=1530622626344`).then(res=>{
        
        this.list=res.data.songlist
        this.top=res.data
        // console.log(this.list)
        // console.log(this.top)
      })
      axios.post(`/cgi-bin/musicu.fcg?_=1530667756628`,`{"comm":{"g_tk":5381,"uin":0,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"url_mid":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"6469908836","songmid":["0001n62Q0uuzMB","002Fjdnk0zz1T6","003mbrxP1icccV","002GlIPm4Pywbq","003PRxSJ48d0QA","002dh98v0Clgrm","0015Oqsw1INCeZ","003FjKpF2n4YlJ","001U6lTA1uRm2k","002AzeJ92OvaLo","001Rg26A283VpL","004Jghn91sG0eJ","000uhMwj387EBp","004FjJo32TISsY","003FFWnA3AIczD","002RZd8A4W3djY","000LX4oT0zWsIt","001SY3AT291yqf","000Z0FKy0Lz4Im","004fR4nd0YI2vY","002dPIpK0Tlklh","003IIw5H2EntnB","001duIhk2iQc7n","001bYzr83sVgGX","002dOmGb1OQRLv","001ffMIV0Pl3Q9","000nNzj03CNUIT","002wKHHm42wVh1","004LEz3b2u7Yvh","000bVq2n0nEoEU","003XFhZF1yG7jD","000xm8tL3q5SUb","0025O6eU22K9Og","00274H2M3zJ6Rq","003Ho2cO2RXwUc","0008XVDo0a2UkS","003ZFC693GZKCq","004EILCE1WlbiJ","001lhnoq0Lynpc","000Mxw3T3gA9rn","0044szCY3LIA9J","003s4IHS1LZ30R","001HXIzh1hfxKw","001kogHh1HTmEN","003cOTBA0XQHZr","003GbiVB1LliR1","004FAWcX1hdoix","003gWfQ04LBELl","002ayDxU1ShriP","000yZOIT39CCU1"],"songtype":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"uin":"0","loginflag":0,"platform":"23"}}}
`).then(res=>{
        // console.log(res)
        this.musicurl = res.data.url_mid.data.midurlinfo
        console.log(this.musicurl[0].purl)
      }).catch(error=>{console.log(error)})
      //https://u.y.qq.com/cgi-bin/musicu.fcg?_=1530667756628
      }
    }
    
  

</script>

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
  padding-bottom: 20%;  
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
  margin-top: 3%;
}
ul{list-style: none;
  .index{float: left;color:red;margin-left: 4%;margin-top: 2%}
  h3{margin-left: 14%;margin-top: 3%;}
  p{margin-left: 14%;margin-top: 1%;}
}
.inside{
  margin-left: 5%;
  margin-top: 5%;
}
.mint-button{
  position: absolute;
  width: 50%;
  background-color: #31c27c;
  left:25%;
  top:27%;

}
</style>