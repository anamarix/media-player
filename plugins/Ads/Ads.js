


const ALL_ADS = [
  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",
    title: "Reklama 1",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",
    title: "Reklama 2",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png",
    title: "Reklama 3",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",
    title:"Reklama 4",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-autenticacion-passport-6d45426a-2b24-4757-8927-7bfaf54529dd.png",
    title: "Reklama 5",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-backend-frontend-02b2ac18-331a-4959-85bf-0bd3c2aa009c.png",
    title: "Reklama 6",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",
    title: "Reklama 7",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "7https://www.google.com/",
  },

  {
    imageUrl:
      "https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png",
    title: "Reklama 8",
    body: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloremm molestias quas nisi autem excepturi.",
    url: "https://www.google.com/",
  },
];

class Ads {
  constructor() {
    this.initAds();
    this.handleTimeUpdate= this.handleTimeUpdate.bind(this);
    this.renderAd = this.renderAd.bind(this);
    this.adsContainer = document.createElement('div');
  }

  initAds() {
    this.ads = [...ALL_ADS];
  }

  getAd() {
    if (this.ads.length === 0) {
      this.initAds();
    }
    this.current = this.ads.pop();
    return this.current;
  }

  run(player){
      this.player = player;
      
      this.player.container.appendChild(this.adsContainer);
      this.media = this.player.media;
     this.media.ontimeupdate=this.handleTimeUpdate;
  }

  handleTimeUpdate(){
    const currentTime = Math.floor(this.media.currentTime);
    if(currentTime % 15 === 0){
      this.renderAd();
      
  }
    
  }

  renderAd(){

    if(this.currentAd){
      return;
    }
      const ad = this.getAd();
      this.currentAd = ad;
      this.adsContainer.innerHTML =
       ` <div class="ads">
      <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
        <img class="ads__img" src="${this.currentAd.imageUrl}" />
        <div class="ads__info">
          <h5 class="ads__title">${this.currentAd.title}</h5>
          <p class="ads__body">${this.currentAd.body}</p>
        </div>
      </a>
    </div>`;
    setTimeout(()=>{
      this.currentAd=null,
      this.adsContainer.innerHTML ="";
    },5000
      )

  }
}

export default Ads;
