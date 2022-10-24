window.addEventListener("DOMContentLoaded", () => {
  fetchCrypto()
  document.querySelector("#search").addEventListener("submit", search)
})


const crypto = document.querySelector("#container")
function fetchCrypto() {
  const form = document.querySelector("#search");
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = document.querySelector("#id").value
    const likeBtn = document.querySelector('.crypto-like-button')
    likeBtn.style.display = 'block'
  fetch(`http://localhost:3000/crypto?q=${searchTerm}`)
  .then(r => r.json())
  .then(data => {
    console.log(data)

    crypto.innerHTML = renderAll(data)
  })
  })
}

function renderAll(crypto) {
  return crypto.map(c => renderSingle(c)).join("")
}

function renderSingle(crypto){
  return `<div class="crypto-card" id="${crypto.id}">
    <div class="crypto-frame">
      <h1 class="center-text">${crypto.name}</h1>
      <h2>${crypto.price}</h2>
      <h2>${crypto.dropRate}</h2>
    </div>
  </div>`

};


const allHearts = document.querySelectorAll('.like-glyph');


const btn = document.querySelector(".crypto-like-button")



  function like(e) {
  const heart = e.target;
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  if(heart.className === "like-glyph"){
      heart.className = 'liked-heart'
  } else if (heart.className === "liked-heart"){
    heart.innerText === EMPTY_HEART
    heart.className = "unliked-heart"
  } else if (heart.className === "unliked-heart")
    }

  for (const glyph of allHearts) {
  glyph.addEventListener("click", like)
  }


