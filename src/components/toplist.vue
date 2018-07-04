<template>
  <div class="top">
  	<navbar	></navbar>
  <div v-for = "(data,index) in list" class="outside" @click ="detailhere(index)">
 
  	<img :src = "list[index].picUrl">
  	<h4>{{list[index].topTitle}}</h4>
  	<p>{{list[index].songList[0].songname}}-{{list[index].songList[0].singername}}</p>
  	<p>{{list[index].songList[1].songname}}-{{list[index].songList[1].singername}}</p>
  	<p>{{list[index].songList[2].songname}}-{{list[index].songList[2].singername}}</p>
  
  </div>
</div>
</template>

<script>
import navbar from "./navbar"
import axios from "axios";
import mrrrouter from "../router";
export default{
		data(){
			return {
				list:null,
			}
		},
		components:{
			navbar
		},
		
		mounted(){
 		//https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530598197561
			//https://m.maizuo.com/v4/api/film/4243?__t=1530497395644
			axios.get(`/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530600640934`).then(res=>{
				
				this.list=res.data.data.topList
				console.log(this.list)
			})
 		},
 		methods:{
 			detailhere(res){
 			console.log()
 			mrrrouter.push(`toplistid/${this.list[res].id}`)
 		
	}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.outside{
	overflow: hidden;
	margin:2%;
	background-color: #fff;
}
img{
	float:left;
	width: 30%;
	height: 15%;
}
h4{
	position: relative;
	left: 2%;
	margin-left: 3%;
	margin-top: 1%;
}
p{
	position: relative;
	left: 2%;
	margin-top: 2%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.top{
	background-color: #f4f4f4;
}
</style>