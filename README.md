# 彥霖的生日整人企劃
## 本專案為朋友之間進行整人活動，以知名影片串流平台Jable當作網頁切版參考，絕無進行任何商業活動，純屬研究用途，若有不適將立即刪除
## 影片播放器設定
```HTML=530
<section class="pb-3 pb-e-lg-30">
		<script data-cfasync="false" src="https://assets.jable.tv/assets/js/player.js"></script>
		<div class="plyr__video-embed" id="player">
			<iframe src="https://player.vimeo.com/video/你的影片ID" allowfullscreen="allowfullscreen" allowtransparency="allowtransparency" allow="autoplay"></iframe>
		</div>
		<script>
			new Plyr('#player', {
				ratio: '16:9',
				fullscreen: {enabled: true, fallback: true, iosNative: true},
				ads: {enabled: true, tagUrl: 'https://syndication.exosrv.com/splash.php?idzone=3377419'},
				previewThumbnails: {enabled: false}
			});
		</script>
</section>
```
* 本專案使用Viemo上傳影片，並嵌入至index.html
