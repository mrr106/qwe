<template>
	<article class="wrap">
		<section class="topbar" v-show="topbar">
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
							<span class="song_name__text js_song_name">这就是爱情</span>
						</h1>
						<h2 class="singer_name js_singer_name js_singer">李代沫</h2>		
					</div>
					<!-- 歌词大部分 -->
					<div class="song_info__bd js_toggle_cover js_tj">
						<!-- 海报部分 -->
						<div class="album_cover js_cover fade_out">
							<img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001UjuVF1qB5qa.jpg?max_age=2592000" class="album_cover__img js_album_cover">
						</div>
						<!-- 歌词部分 -->
						<div class="lyric js_lrc fade_in">
							
						</div>
					</div>
				</div>
				<div class="opt"></div>
			</div>

		</section>
	</article>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			topbar:true				
			}
		},
		mounted(){
			setTimeout(function(){
				this.topbar=false;
			},3000)
		}
	}
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

</style>