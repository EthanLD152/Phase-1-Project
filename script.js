window.addEventListener("DOMContentLoaded", () => {
  fetchCrypto()
}

function fetchCrypto() {
  fetch(`http://localhost:3000/crypto`)
  .then(r => r.json())
  .then(data => {
    console.log(data)

}