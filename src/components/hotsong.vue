<template>
	<article class="wrap">
		<section class="topbar" :v-show="topbar">
			<div class="topbar_bd">
				<img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=604800" class="logo">
				<a href="javascript:;">下载APP</a>
			</div>
		</section>
		<!-- 通栏 -->
		<section class="topbox" v-show="false">
			<div class="event_operation">
				<img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/297337.jpg?max_age=2592000" alt="" class="event_operation__img js_img">
				<div class="event_operation__bd">
					<h3 class="event_operation__tit js_title ">1元领世界杯限定皮肤</h3>
					<p class="event_operation__desc js_desc ">免费抽世界杯周边好礼</p> 	
				</div>
				<a href="javascript:;" class="event_operation__btn js_btn js_tj js_link" data-id="https://y.qq.com/apg/277/index.html?mbref=312.30241ADTAG=wechatqp&openinqqmusic=1&channelID=10031777" data-tj="plugin_click_$qm.14" data-target="music" data-cid="10031512">点击参与</a>
			</div>
			
		</section> 
		<section class="main">
			<div class="main__bd">
				<div class="song_info">
					<!-- 歌曲的header -->
					<div class="song_info__hd">
						<h1 class="song_name">
							<span class="song_name__text js_song_name">{{songname}}{{transname}}</span>
						</h1>
						<h2 class="singer_name js_singer_name js_singer">{{singer}}</h2>		
					</div>
					<!-- 歌词大部分 -->
					<div class="song_info__bd js_toggle_cover js_tj">
						<!-- 海报部分 -->
						<div class="album_cover js_cover fade_out">
							<img :src="absrc" class="album_cover__img js_album_cover">
						</div>
						<!-- 歌词部分 -->
						<div class="lyric js_lrc fade_in">
							<div class="window">
								
							</div>
							<ul class="lyricul">
								<li v-for="ls,index in lyriclist">
									{{ls.title}}
									{{lyriclist[index].content[0]?lyriclist[index].content[0].value:''}}
									<!-- {{ls.content[0].value?ls.content[0].value:'1'}} -->
								</li>
							</ul>
							<a class="lyric_more">
								查看完整歌词 >
							</a>
						</div>
					</div>
				</div>
				<div class="opt">
					<a class="mv" href="javascript:;">MV</a>
					<a href="javascript:;">MV</a>
					<a href="javascript:;">MV</a>
					<div class="btn_download"><a>免费下载歌曲</a></div>
				</div>
			</div>

		</section>
		<section class="commen">
			<ul class="commen_list">
				<li class="commen_list_item" v-for="commen in commenlist">
					<div class="commen_icon l">
						<img :src="commen.avatarurl">
					</div>
					<div class="l comment_list__body" >
						<header class="comment_list__heading">
							<h3 class="comment_list__tit">
								<span class="nick">{{commen.nick}}</span>
								<img src="https://y.gtimg.cn/music/icon/v1/h5/svip3.png?max_age=2592000">
								<img src="//y.gtimg.cn/music/icon/v1/h5/medal.png?max_age=2592000">
								<span class="r">置顶</span>
							</h3>
<!-- 							<div class="comment_list__time">2018</div>
 -->						</header>
						<div class="commen_content">
							<p>{{commen.rootcommentcontent}}</p>
						</div>
						<!-- http://thirdqq.qlogo.cn/g?b=sdk&k=GjsOIbcfosicprmrXkfB2EA&s=140&t=1519918049 -->
					</div>
				</li>
			</ul>
		</section>
	</article>
</template>
<script type="text/javascript">
import axios from "axios"
	export default{
		data(){
			return{
			topbar:true	,
			transname:'',
			songname:'',
			singer:'',
			absrc:'',
			srccode:'',
			lyriclist:[],
			commenlist:[]
			}
		},
		mounted(){
			setTimeout(function(){
				this.topbar=false;
			},3000)
			//https://u.y.qq.com
			// https://u.y.qq.com/cgi-bin/musicu.fcg?_=1530693005106
			 axios.post(`cgi-bin/musicu.fcg?_=1530693005106`,`{"comm":{"g_tk":5381,"uin":0,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"detail":{"module":"music.pf_song_detail_svr","method":"get_song_detail","param":{"song_id":214039228}},"simsongs":{"module":"rcmusic.similarSongRadioServer","method":"get_simsongs","param":{"songid":214039228}},"gedan":{"module":"music.mb_gedan_recommend_svr","method":"get_related_gedan","param":{"sin":0,"last_id":0,"song_type":1,"song_id":214039228}}}

			`).then(res=>{

			        // console.log(res.data.detail.data.info[0].content[0].value)
			        // console.log(res.data.detail.data.info)
			        this.srccode=res.data.detail.data.track_info.album.mid
			     	this.transname=(res.data.detail.data.extras.transname)
			     	this.songname=res.data.detail.data.extras.name
			     	this.singer = res.data.detail.data.info[0].content[0].value
			     	// 003FnPIX4FyM97
			     	this.absrc = `//y.gtimg.cn/music/photo_new/T002R300x300M000${this.srccode}.jpg?max_age=2592000`
			     	this.lyriclist = res.data.detail.data.info
			     	// console.log(this.lyriclist[6].content[0]?lyriclist[6].content[0].value:'')
			     	// var aaa = []
			     	// var bbb = res.data.detail.data.info
			     	// for(var i=0;i<bbb.length;i++){
			     	// 	// console.log('bbb'+ i)
			     	// 	aaa.push(bbb[i])
			     	// 	console.log(aaa[i].content[0].value)
			     	// }
			      })
			axios.get('/base/fcgi-bin/fcg_global_comment_h5.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&cid=205360772&reqtype=1&cmd=8&needmusiccrit=0&pagesize=3&lasthotcommentid=0&qq=0&msg_comment_id=&pagenum=0&biztype=1&topid=214039228&ct=999&_=1530854365958').then(res=>{
				console.log(res.data.hot_comment.commentlist)
				this.commenlist = res.data.hot_comment.commentlist;
			})

		}
	}
	// https://u.y.qq.com/cgi-bin/musicu.fcg?_=1530852705094
</script>
<!-- <style type="text/css" src="//y.gtimg.cn/mediastyle/mod/mobile/mod_comment.css?max_age=2592000&ver=20180416"></style> -->
<style type="text/css" lang="scss" scoped>
article{
	// background: #f4f4f4;
	.topbar{
		.topbar_bd{
			height: 50px;
			padding: 10px 16px;
			img{
				display: block;
				height: 26px;
				float: left;
				margin-top: 10px;
			}
			a{
				display: inline-block;
				box-sizing: border-box;
				width: 90px;
				margin-top: 10px;
				text-decoration: none;
				text-align: center;
				float: right;
    			height: 30px;
    			line-height: 10px;
   			 	padding: 10px;
    			font-size: 14px;
    			color: #000;
    			border: solid 1px rgba(0,0,0,.3);
    			border-radius: 25px;
			}
		}
	}
	.topbox{
		.event_operation{
			padding: 20px;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			z-index: 100;
			display: -webkit-box;
			-webkit-box-pack: justify;
			-webkit-box-align: center;
			box-shadow: 0 0.05rem 0.05rem rgba(0,0,0,.02);
			background: #fff;
			img{
				width: 64px;
				height: 64px;
			}
			div{
				h3{
					font-size: 16px;
					margin-bottom: 5px;
					font-weight: 100;
				}
				p{
					color: #a4a4a4;
					font-size: 14px;
				}
			}
			a{
				display: block;
    			height: 40px;
    			width: 80px;
    			box-sizing: border-box;
    			text-align: center;
   				line-height: 20px;
   			 	padding: 10px;
    			font-size: 14px;
    			color: #000;
    			border: solid 1px rgba(0,0,0,.3);
    			border-radius: 25px;
				}
			}
	
		}
	}
	.main{
		.main__bd{
			// height: 1900px;
			.song_info{
				.song_info__hd{
					color:#ccc;
					font-size: 12px;
					.song_name__text{
						text-align: center;
						display: block;
						// max-width:32px;
						// overflow: hidden;
						// white-space: nowrap;
						// text-overflow: ellipsis;
						font-size: 19px;
						font-weight: 400;
						color: #000;
					}
					.singer_name{
						margin: 20px 15px;
						    text-align: center;
						    overflow: hidden;
						    white-space: nowrap;
						    text-overflow: ellipsis;
						    font-size: 14px;
						    font-weight: 100;
						    color: grey;
					}
				}
				.song_info__bd{
					.album_cover{
						.album_cover__img{
							margin-left: 10%
							}
						}
						.lyric{
							
							.lyricul{
								background:#f4f4f4;
								text-align: center;
								height: 300px;
								overflow:auto;
							}
							.lyric_more{
								display: inline-block;
								width: 100%;
								text-align: center;
								height: 50px;line-height: 50px;
							}
						}
					}
				}
				.opt{
					// display: flex;
					a{
						display: inline-block;
						width: 40px;height: 40px;border: 1px solid #ccc;border-radius: 50%;
						text-align: center;line-height: 40px;text-decoration: none;
						// flex:1;
						color: #000;
						// margin-left: 20%
					}
					a.mv{
						margin-left: 30%;
					}
					.btn_download{
						width: 180px;height: 40px;
						background: #7cc231;
						border: 1px solid #ccc;
						border-radius: 50px;
						margin:30px auto;
						a{
							display: inline-block;width: 100%;
							border: none;
							color: #fff;
						}
					}
				}
			}
	}
	.commen{
		width:100%;
		// background: #f60;
		height: 1000px;padding: 0 20px;
		box-sizing: border-box;
		.commen_list{list-style: none;
			.commen_list_item{
				.commen_icon{
					width: 20%;
					margin-top: 10px;
					img{
						width: 30px;height:30px;border-radius: 50%;
						margin-left: 40%;
					}
				}
				.comment_list__body{
					width:80% ;
					.comment_list__heading{
						overflow: hidden;
						.comment_list__tit{
							// background:#ff0;
							margin-top: 10px;
							margin-bottom: 10px;
							.nick{
								font-size: 16px;
							}
							img{
								width: 20px;height:20px;
							}
							span.r{
								border: 1px solid #ccc;display: inline-block;
								font-size: 14px;color:#aaa;padding:0 6px;border-radius: 10px;
							}
						}
						.commen_content{

						}
					}
				}
			}
		}
	}
	
</style>