// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Aplicação de botox",
    duration: "Dona Cleitinha",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "images/botox-1.jpg",
    // video_id: "GykTLqODQuU"
  },
  {
    title: "Aplicação de botox",
    duration: "Dona Sivalda",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "images/botox-2.jpg",
    // video_id: "GykTLqODQuU"
  },
  {
    title: "Aplicação de botox",
    duration: "Namorada do André",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "images/ts_fisio.jpg",
    // video_id: "GykTLqODQuU"
  },
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  // cardClone.querySelector(".title").innerHTML = "";
  // cardClone.querySelector(".info > p.text--medium").innerHTML =
  //   video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();



// MENU RESPONSIVO