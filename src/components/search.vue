<template>
	<div>
	<div class="liebiao">
		<navbar	></navbar>

	</div>
	
	<div class="ssk">
		<input type="text" placeholder="搜索歌词，歌单，专辑" v-model="searchName">
		<button @click = "search()">搜索</button>
	</div>

	<div class="hot" v-if="datalist">
		<h3>热门搜索</h3>
		<ul>
			<li v-for="data in sp" class="mmp">
				{{data.k}}
			</li>
		</ul>
	</div>
	<div>
		<ul class="szongzhihang">
			<li v-for="data in asearch">
				<h4>{{data.songname}}</h4>
				<p>{{searchsinger.keyword}}</p>
				<!-- <audio :src=""></audio> -->
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
import axios from "axios";
import navbar from "./navbar"

export default {
  data(){
    return {
      datalist:[],
      sp:null,
      searchName:"",
      asearch:null,
      searchsinger:"",
    }
  },
  components:{
	navbar
},
  methods:{
  	search(){
  		//https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530864281449
  // 				axios.get("/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1530922903895").then(res=>{
		// 	console.log(res)
		// })
			
				this.sp.splice(0,this.sp.length)
  				axios.get(`/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=${this.searchName}&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1530922903895`).then(res=>{
  					this.searchsinger = res.data.data
  					this.asearch = res.data.data.song.list
  					console.log(this.searchsinger)
  				})
  				  
  				   
  				
  	}
  },
	mounted(){

		//获取上一级路由传来的id值
		axios.get("/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530865673905").then(res=>{
		  this.datalist = res.data.data.hotkey;
		  // console.log(this.datalist);
		  // console.log(res.data.data.special_key)

		  	this.sp = res.data.data.hotkey.slice(0,11)
			// console.log(this.sp)
		
		})
		// https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1530922903895
		//https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1530922903895


	}

}
//https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530867670989

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,a,img,input{ padding:0; margin:0;}
ul,ol{ list-style:none;}
input{ outline:none;}
img{ display:block; border:0;}
body{font-family:"微软雅黑"; font-size:12px; color:#3e3e3e; background:#f8fafd;}
a{text-decoration:none;}
a:hover{text-decoration: underline; text-decoration:none;}
/*===============公共样式===============*/
.l{ float:left;}
.r{ float:right;}

/*===============公共头样式===============*/

.tou{ height:44px; width: 100%; background: #31c27c; }
img{height:30px;}
.liebiao{ height: 40px; width: 100%; background:#fff; }
.liebiao ul{text-align: center;line-height: 40px; font-size: 20px;}
.liebiao ul li a{webkit-box-flex: 1;
    			position: relative;
    			display: block;
    			height: 40px;
    			/*width: 1000%;*/
   	 			line-height: 40px;
    			overflow: hidden;
    			text-align: center;
    			font-size: 20px;
    			color: rgba(0,0,0,.6);}
.ssk{height: 46px; 
	width: 100%; background: #eee;
	padding-top: 10px; 
	margin-top: 11%;
	}
.ssk input{height:36px; 
	border-color:#eee; width:70%; 
	font-size: 10px; 
	border-radius: 10px; 
	padding-left: 10px; 
	color: #eee;
	margin-left: 10px; 
	
	}
.hot{height: 21px; 
	width: 100%; 
	background:#fff; 
	font-size: 10px; 
	color: #999;  
	line-height: 21px;}
button{height: 36px;
		width: 70px;
		border-radius:10px;
		background: #fff;
		margin-left: 3px;}
.mmp{
	height: 50px;
	background-color: #ccc;
	color:#000;
}
h3{padding-left: 10px;}
.hot ul{padding-left: 5px;}
.hot ul li{display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
	background: #fff;}	
.szongzhihang li{
	height: 55px;
	width: 100%;
	border-bottom: 1px solid #ccc;
}
.szongzhihang li p{
	line-height: 40px;

}
</style>