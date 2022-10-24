window.addEventListener("DOMContentLoaded", () => {
  fetchCrypto()
}

function fetchCrypto() {
  fetch(`http://localhost:3000/crypto?q=${searchTerm}`)
  .then(r => r.json())
  .then(data => {
    console.log(data)

    crypto.innerHTML = renderAll(data)

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

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const allHearts = document.querySelectorAll('.like-glyph');

const btn = document.querySelector(".crypto-like-button")
