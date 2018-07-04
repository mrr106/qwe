<template>
	<div>
		<navbar></navbar>
		<swipe class="my-swipe" :auto="3000">
		  <swipe-item class="slide1" v-for="data in swiperSlides" :key="data.id">
		  	<img :src="data.picUrl"/>
		  </swipe-item>  
		</swipe>

		<div class="radio_list">
			<h3 class="list_title">电台</h3>
			<ul class="radio_wrapper">
				<li v-for="radio in radioList" :key="radio.radioid">
					<a href="/hotsong">
					<div><img :src="radio.picUrl"></div>
					<div><span class="iconfont icon-play"></span></div>
					<div><p>{{radio.Ftitle}}</p></div>
					</a>
				</li>
			</ul>
		</div>
		<div class="hotmenu">
			<h3 class="list_title">热门歌单</h3>
			<ul>
				<li><a href="javascript:;">去客户端发现更多好音乐 ></a></li>
			</ul>
		</div>

		<footer>
			<div>
				<a href="">查看电脑版网页</a>
				<p><img src="../../static/img/qq.png">QQ音乐</p>
			</div>
			<p class="copyright">Copyright © 1998 - <span id="js_cpright_year">2018</span> Tencent. All Rights Reserved.</p>
		</footer>
	</div>
</template>


<script type="text/javascript">
	import "vue-swipe/dist/vue-swipe.css"
	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from "axios"
	import navbar from "./navbar"

	export default {
	  components: {
	    "swipe":Swipe,
	    navbar,
	   "swipe-item":SwipeItem 
	  },
	  data() {
	        return {
	          
	          swiperSlides: [],
	          radioList:[]
	        }
	      },
	 mounted(){
	        
	        // https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530599358753
	        axios.get('/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530599358753').then(res=>{
	        	console.log(res.data.data.radioList)
	        	this.swiperSlides = res.data.data.slider;
	        	this.radioList = res.data.data.radioList
	        	})
	        }

	}
</script>
<style type="text/css" src="../../static/iconfont/iconfont.css" scoped></style>
<style type="text/css" scoped lang="scss">

	div{
		// margin-top: 44px;
		swiper{
			padding: 10px;
			swiper-slide{

				img{
					width: 100px;
				}
			}
		}
	}
	.my-swipe {
	  // margin-bottom: 70px;
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  overflow: hidden;
	  .slide1 {
	    background-color: transparent;
	    color: #fff;
	    height: 100%;
	  }
	}



	.my-swipe {
		img{
			width:100%;
		}
	}

	.radio_list{
		// margin-top:70px;
		box-sizing: border-box;
		background: #f4f4f4;
		padding: 10px;
		.list_title{
			font-size: 16px;
			color: #000;
			margin-bottom: 11px;
			font-weight: normal;
		}
		.radio_wrapper{
			// padding: 0 10px;
			overflow: hidden;
			    margin-right: -8px;
			    height: 240px;
		    h3{
		    	height: 20px;
		    	font-size: 14px;
		    	color: #000;
		    	// margin-bottom: 11px;
		    	font-weight: normal;
		    }
			    li{
			    	float: left;
			    	width: 50%;
			    	-webkit-box-sizing: border-box;
			    	padding-right: 8px;
			    	margin-bottom: 10px;
			    	height: 250px;
			    	// overflow: hidden;
			    	a{
			    		display: block;
			    		height: 100%;
			    		position: relative;
			    		background: #fff;
			    		img{
			    			position: absolute;
    						top: 0;
    						left: 0;
   							display: block;
  						    width: 100%;
    						// z-index: 1;
			    		}
			    		span{
						display: inline-block;
						width: 30px;
						height: 30px; 
						position: relative;
						font-size: 30px;
						color:#fff;
						top:150px;
						left:150px;
						font-weight: 100;

			    		}
			    		p{
			    			display: block;
			    			padding: 0 7px 5px;
			    			color: #000;
			    			position: absolute;
			    			top:197px;
			    		}
			    	}
			    }
		}
	}

	.hotmenu{
		box-sizing: border-box;
		background: #f4f4f4;
		padding: 10px;
		.list_title{
			font-weight: 100;
			font-size: 16px;
		}
		li{
			a{	width: 100%;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 14px;
				padding:0 10px;
				color: rgba(0,0,0,.6);
			}
		}
	}
	footer{
		div{
			text-align: center;
			a{
				position: relative;
				display: inline-block;
				padding: 0 15px;
				font-size: 14px;
				height: 14px;
				line-height: 14px;
				color: #000;
				margin:15px 0;
			}
			p{
				img{
					width: 30px;
					height: 30px;

				}
			}
		}
		p{
			font-size: 10px;
			text-align: center;
			color: rgba(0,0,0,.5);
			// margin-top:10px;
			margin-bottom:20px;
		}
	}
</style>