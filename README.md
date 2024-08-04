# 彥霖的生日整人企劃
## 本專案為朋友之間進行整人活動，以知名影片串流平台Jable當作網頁切版參考，絕無進行任何商業活動，純屬研究用途，若有不適將立即刪除
## 影片播放器設定
```HTML=530
<section class="pb-3 pb-e-lg-30">
		<script data-cfasync="false" src="https://assets.jable.tv/assets/js/player.js"></script>
		<div class="plyr__video-embed" id="player">
			<iframe
				src="https://player.vimeo.com/video/994413148?title=0&byline=0&portrait=0&badge=0"
				allowfullscreen
				allowtransparency
				allow="autoplay"
				style="width:100%; height:100%; position:absolute; top:0; left:0; border:none;">
			</iframe>
		</div>
		<script>
			new Plyr('#player', {
				fullscreen: {
					enabled: true,
					fallback: true,
					iosNative: true
				},
				ads: {
					enabled: true,
					tagUrl: 'https://syndication.exosrv.com/splash.php?idzone=3377419'
				},
				previewThumbnails: {
					enabled: false
				}
			});
		</script>
	</section>
	<style>
		.plyr__video-embed {
			position: relative;
			padding-bottom: 56.25%; /* 16:9比例 */
			height: 0;
			overflow: hidden;
			max-width: 100%;
			background: #000;
		}

		.plyr__video-embed iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
		}

	</style>
```
* 本專案使用Viemo上傳影片，並嵌入至index.html
