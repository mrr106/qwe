<template>
	<section>
		<header class="mod_header">
	        <i class="music_logo">QQ音乐</i>
	        <span class="btn_download">下载APP</span>
        </header>
       <nav class="mod_nav">
       	<ul>
			<router-link tag="li" to="/recom" activeClass="active">推荐</router-link>
       		<router-link tag="li" to="/toplist" activeClass="active">排行榜</router-link>
       		<router-link tag="li" to="/search" activeClass="active">搜索</router-link>
       	</ul>
      <!--   <a href="javascript:;" data-nav="recom" activeClass="active">推荐</a>
        <a href="javascript:;" data-nav="toplist" activeClass="active">排行榜</a>
        <a href="javascript:;" data-nav="search" activeClass="active">搜索</a> -->
       </nav>

	</section>
</template>

<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css" src="../../static/iconfont/iconfont.css" scoped></style>
<style type="text/css" scoped lang="scss">
	header{
		overflow: hidden;
		position: relative;
		height:44px;
		background: #31c27c;
		.icon-QQyinle{
			color:#fff;
			background: transparent;
			font-size: 40px;
		}
		.music_logo{
				float: left;
			    display: block;
			    width: 90px;
			    height: 25px;
			    margin: 9px 0 0 10px;
			    background-position:0;
			    background-image: url("../../static/img/qq.png") ;
			    background-size:contain;
			    background-repeat: no-repeat;
			    text-indent: 30px;
		}
		.btn_download{
			    position: absolute;
			    display: inline-block;
			    right: 10px;
			    top: 8px;
			    height: 28px;
			    padding: 0 12px;
			    line-height: 28px;
			    border-radius: 99px;
			    font-size: 14px;
			    background: #149c5a;
			    color: #fff;
			}
	}
	.mod_nav {
		background: #fff;
		ul{
		display: flex;
			
		li{
		text-decoration: none;
		flex:1;
		position: relative;
		// display: inline-block;
		float:left;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
		text-align: center;
		font-size: 16px;
		cursor: pointer
		}
	}

}
 .active{
		color:#31c27c;
		border-bottom: 2px solid #31c27c;
	}
	
</style>