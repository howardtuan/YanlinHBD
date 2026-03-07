// Initialize Video Player
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('player')) {
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
    }
});
