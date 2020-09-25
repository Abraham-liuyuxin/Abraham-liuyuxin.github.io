const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {    
        url: 'https://stszjl.aoscdn.com/app/showmore/transcoding/video/afe19eaeeccc8e18c718f4a62a3acd71/lsghtve.mp4?auth_key=1601054398-649608-518842-078dae50d65978ed219c1bb5738cce4b&Expires=1601054398',
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