<template>
	<div id="js_wrap">
		<div class="info_box">
			<div class="top_bar ">
				<img class="top_bar__img l" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000"></img>
				<div class="top_bar__bd l">
					<h6 class="top_bar__tit">QQ音乐</h6>
					<p class="top_bar__desc">打开APP收藏、下载</p>
				</div>
				<a href="javascript:;" class="top_bar__btn js_open_music r">打开</a>
			</div>
			<div class="album">
				<div class="album__media js_open_music l">
					<img class="album__cover" onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_150.png?max_age=2592000';this.onerror=null;" :src="src" alt="弱水">
				</div>
				<div class="album__bd l">
					<h1 class="album__name js_info_show">{{songname}}</h1>
					<div class="author js_open_singer">
						<img class="author_avatar" :src="singersrc">
						<span class="author_name">{{singername}}</span>
					</div>
					<p class="album__desc">发行时间：{{aDate}}</p>
				</div>
			</div>
			<!-- 播放全部  按钮 -->
			<div class="opt_box">
				<a class="btn_play_all js_play_all" href="javascript:;"><span></span>播放全部</a>
			</div>

			<!-- 播放按钮 以下部分 -->
			<div class="main">
				<div class="count_box">
					<div class="count_box__desc l">
						专辑<span class="count_box__number">共{{songsum}}首</span>
					</div>
					<div class="r collect">收藏</div>
				</div>
				<ul class="qui_list">
					<li class="qui_list__item  js_play_song" v-for="album,index in albumlist">
						<div class="qui_list__order l"><span>{{index+1}}</span></div>
						<div class="qui_list__bd l">
							<h3 class="qui_list__tit">{{album.albumname}}</h3>
							<p class="qui_list__desc">{{singername}}</p>
						</div>
					</li>
				</ul>
				<div class="qui_tit" v-show="desc">专辑简介</div>
				<div class="intro">
					

					<div class="detail">{{desc}}</div>
					<a class="r intro__switch js_fold intro__switch--open">{{open}}</a>
				</div>
				<div class="qui_tit">
					<h2>该歌手的其他专辑</h2>
				</div>
				<ul class="qui_ul qui_equal_col--3">
					<li class="l qui_li" v-for="cd,index in cdlist">
						<a class="qui_equal_col__box js_open_detail">
							<img :src='cdsrc[index]'>
							<h3 class="qui_equal_col__tit">{{cd.title}}</h3>
							<p class="qui_equal_col__desc">{{cd.pubDate}}</p>
						</a>
					</li>
				</ul>
				<div class="check_more js_show_more_album">
					查看歌手更多专辑 >
				</div>
				<div class="brand">
					<img class="brand_logo" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000">
					<p>QQ音乐</p>
				</div>
			</div>
		</div>
	</div>				
</template>
<script type="text/javascript">
import axios from "axios"
import router from "../router"
	export default{
		data(){
			return{
				data:{},
				src:'',
				songname:'',
				singername:'',
				singersrc:'',
				aDate:'',
				songsum:0,
				desc:'',
				open:'展开',
				albumlist:[],
				album:'',
				cd:'',
				cdlist:[],
				cdsrc:[]
			}
		},
		// beforeMount(){
		// 	(function(){
		// 		try{

		// 		}catch(error){
		// 			console.log(error+'aaaaaaaaaaaaaaa')

		// 		}
		// 	})()
		// },
		mounted(){
			// console.log(this.$route.params.id);
			// https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=000OzMmu2AEQ9Q&g_tk=1375173830&uin=491609915&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530754324120
			axios.get(`/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=${this.$route.params.id}&g_tk=1375173830&uin=491609915&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530754324120`).then(res=>{
				if(res.data.message==="para error!"){
					// router.push('/m/act/sfhd/148.html?ADTAG=myqq&from=myqq&channel=10007100')
					// location.href="https://y.qq.com/m/act/sfhd/148.html?ADTAG=myqq&from=myqq&channel=10007100"
					router.push('/recom')
					// console.log('aaaaaa')
				}
				// console.log(res.data.data.list);
				this.data=res.data.data
				this.songname=this.data.name
				this.src=`https://y.gtimg.cn/music/photo_new/T002R150x150M000${this.data.mid}.jpg?max_age=2592000`
				this.singername = this.data.singername
				this.singersrc = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${this.data.singermid}.jpg?max_age=2592000`
				this.aDate=this.data.aDate
				this.songsum=this.data.cur_song_num
				this.desc = this.data.desc
				if(!this.desc){
					this.open=''
				}
				this.albumlist = this.data.list
				this.cdlist = this.data.otherAlbums
				// "001DV8La0Y06pm"
				// this.cdsrc = `https://y.gtimg.cn/music/photo_new/T002R150x150M000${this.cd.albumMid}.jpg?max_age=2592000`
				// console.log(this.cdlist[index])
				// for(i=0;i<this.cdlist.length;i++){
				// }
				

				for(var i=0;i<this.cdlist.length;i++){
					// console.log(this.cdlist[i])
					// var a =i++;
					// a+=this.cdlist[i].albumMid
					this.cdsrc.push(`https://y.gtimg.cn/music/photo_new/T002R150x150M000${this.cdlist[i].albumMid}.jpg?max_age=2592000`)
				}
					// console.log(this.cdsrc)
				// console.log(this.cd.albumMid)
				// "004YXxql1sSr2o"
				// this.filminfo =res.data.data.film

				//同步可以省略 dispatch 到action 这一步， 直接到 mutation 
				
				// this.$store.commit("myChangeTitle",this.filminfo.name);
				// 
				// this.$store.dispatch("mychangeTitleAction",this.filminfo.name);
			})
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	#js_wrap{
		.info_box{
			.top_bar{
				background: #545657;
				padding: 10px;
				overflow: hidden;
				height: 48px;
				color: #fff;
				.top_bar__img{
					width: 36px;height: 36px;
				}
				.top_bar__bd{
					width: 310px;
					padding: 0 20px;
					box-sizing: border-box;
					h6{
						font-weight: 100;
						font-size: 18px;
					}
				}
				.top_bar__btn{
					position: relative;
    				display: inline-block;
    				text-decoration: none;
    				box-sizing:border-box;
    				height: 24px;
    				padding: 0 20px;
    				line-height: 24px;
    				font-size: 15px;
    				border:1px solid #ccc;
    				border-radius: 20px;
    				margin-top: -30px;
    				color: #fff;
				}
			}
			.album{
				color: #fff;
				height: 125px;
				background: #585c5c;
				padding: 15px;
				.album__media{
					img{
						width: 125px;
						height: 125px;
						padding-right: 10px;
					}
				}
				.album__bd{
					padding-top: 30px ;
					h1{
						font-size: 20px;
						font-weight: 100;
					}
					.author{
						img{
							margin-top: 7px;
							width: 24px;height: 24px;border-radius: 50%;
						}
					}
					.album__desc{
						margin-top: 5px;
						font-size: 14px;
					}
				}
			}
			.opt_box{
				line-height: 40px;
				height: 84px;
				background: #585c5c;
				overflow: hidden;
					a{
					margin: 10px auto;
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
    				background: #31c27c;
    				text-decoration: none;
					}
				}
			.main{
				height:600px;
				width:100%;
				box-sizing: border-box;
				// padding: 0 20px;
				// background: #ff0;
				.count_box{
					padding:0 20px;
					box-sizing: border-box;
					width: 100%;
					// background: #f60;
					height: 50px;
					line-height: 50px;
				}
				.qui_list{
					padding:0 20px;
					overflow: hidden;
					.qui_list__item{
						overflow: hidden;
						.qui_list__order{
							width: 40px;height: 40px;text-align: center;line-height: 40px;
						}
					}
				}
				.qui_tit{
					overflow: hidden;
					height: 900px;
					h2{
						font-weight: 100;
						font-size: 20px;
					}
					text-align: center;
					height: 55px;
					line-height: 55px;
					font-size: 18px;color: #000;
				}
				.intro{
						padding:0 20px;
					    text-align: justify;
    					word-wrap: break-word;
    					font-size: 14px;
    					line-height: 1.8;
					// height: 84px;
					// background: #f60;
				}
				.qui_ul{
					overflow: hidden;
					width: 100%;
					display: flex;
					.qui_li{
						flex:1;
						margin-right: 2px;
						a{
							img{
								width: 100%;
							}
							h3{
								margin:5px 8px;
								// margin-top: 5px;
								color:#000;
								font-weight: 100;
								font-size: 14px;
							}
							p{
								width: 100%;
								margin: 0 8px;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								font-size: 12px;
								color:#999
							}
						}
					}
				}
			}
			.check_more{
				height:55px;
				line-height: 55px;
				width: 100%;
				padding:0 20px;
				text-align: center;
				font-size: 14px;
				color: #999
			}
			.brand{
				width: 100%;
				height:150px;
				margin-bottom: 50px;
				overflow: hidden;
				img{
					width: 32px;height:32px;
					margin: 20px 46%;
					margin-bottom: 2px;
					
				}
				p{
					text-align: center
				}

			}
		}
	}
</style>



<!-- 
	"http://y.qq.com/w/album.html?albummid=000OzMmu2AEQ9Q"

https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=000OzMmu2AEQ9Q&g_tk=1375173830&uin=491609915&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1530752534380
 -->