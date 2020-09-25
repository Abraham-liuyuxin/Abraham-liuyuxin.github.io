const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'https://stszjl.aoscdn.com/app/showmore/transcoding/video/afe19eaeeccc8e18c718f4a62a3acd71/lsghtve.mp4?auth_key=1601018759-793877-416038-c904409f68ac73e018213ebecd27d32d&Expires=1601018759',
        pic: 'https://storage.live.com/items/2EBEB8465D8C4C1E!2521?authkey=%21AOCrgXvkbYgCLpk',
        type: 'auto',
    },
    pluginOptions: {
        hls: {
            // hls config
        },
    },
});
console.log(dp.plugins.hls); // Hls 实例