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