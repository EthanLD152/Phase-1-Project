
fetchCrypto()

const cryptoId = document.querySelector("#cryptoId")
const cryptoContainer = document.querySelector("#container")
const cryptoPrice = document.querySelector("#price")
const cryptoRate = document.querySelector("#rate")
const searchResultContainer = document.querySelector("#searchResultContainer")


let cryptos = [];

function displayCrypto(crypto) {
  const h1 = document.createElement("h1")
  h1.textContent = crypto.name

  const h2 = document.createElement("h2")
  h2.textContent = crypto.price

  const h3 = document.createElement("h3")
  h3.textContent = crypto.dropRate

  handleMainDisplay(h1,h2,h3)
}

function handleMainDisplay(h1, h2, h3) {
  cryptoContainer.append(h1, h2, h3)
}

function handleSearchDisplay(crypto) {
  cryptoContainer.textContent = ""
  displayCrypto(crypto)
}

function fetchCrypto() {
  fetch(`http://localhost:3000/crypto`)
    .then(r => r.json())
    .then(data => {
      cryptos = data;
      console.log(data)
        data.map(cryptoInfo => {

          displayCrypto(cryptoInfo)

          const newBtn = document.createElement("button")
          newBtn.textContent = "like ♡"
          handleLikeFunc(newBtn)

          cryptoContainer.append(newBtn)
        })
    })
}

function handleLikeFunc(newBtn) {
  newBtn.addEventListener("click", function () {
    if(newBtn.textContent === "like ♡") {
      newBtn.textContent = 'like ♥'
    } else if(newBtn.textContent === "like ♥") {
      newBtn.textContent = "like ♡"
    }
  })
}

const form = document.querySelector("#search");
form.addEventListener('submit', handleSearch)

function handleSearch(e) {
  e.preventDefault();

  let userInput = document.getElementById("cryptoNameInput").value;
  const foundCrypto = cryptos.find((crypto) => {
    return crypto.name === userInput
  })
  handleSearchDisplay(foundCrypto)

  showAllBtn.style.display = 'block'
}

const showAllBtn = document.querySelector(".show-all-btn");
showAllBtn.addEventListener('click', handleShowAllBtn)
showAllBtn.style.display = 'none'

function handleShowAllBtn() {
  showAllBtn.style.display = 'none'
  cryptoContainer.textContent = fetchCrypto()
}

let userInputField = document.getElementById("cryptoNameInput")
userInputField.addEventListener('focus', (event) => {
  event.target.style.background = "cadetblue"
})


















