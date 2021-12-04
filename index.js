import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";
import Ads from "./plugins/Ads/Ads.js";
const video = document.querySelector('video');
const buttonPlay = document.querySelector("button#playButton");
const buttonMute = document.querySelector("button#muteButton");

const player = new MediaPlayer({el:video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]});


buttonPlay.onclick = () =>{
    player.togglePlay();
};

buttonMute.onclick = () => {
    player.toggleMute();
}
