

class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlayer();
    this._initPlugins();
  }
    

_initPlayer(){
 this.container = document.createElement('div');
  this.media.parentNode.insertBefore(this.container, this.media);
  this.container.appendChild(this.media)
  this.container.className="player_container";
}
_initPlugins() {
    this.plugins.forEach(plugin => plugin.run(this));
}

  togglePlay() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  }
  play(){
    this.media.play()
  }
  pause(){
    this.media.pause()
  }

  toggleMute() {
    this.media.muted = !this.media.muted;
  }
  mute(){
    this.media.muted=true;
  }

}

export default MediaPlayer;
