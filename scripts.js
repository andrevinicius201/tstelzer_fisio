// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Aplicação Botox",
    duration: "Dona Cleitinha",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "/images/botox-1.jpg",
    // video_id: "GykTLqODQuU"
  },
  {
    title: "Aplicação Botox",
    duration: "Dona Sivalda",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "/images/botox-2.jpg",
    // video_id: "GykTLqODQuU"
  },
  {
    title: "Gatinha Xuxu",
    duration: "Namorada do André",
    // thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    thumb: "/images/ts_fisio.jpg",
    // video_id: "GykTLqODQuU"
  },
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO