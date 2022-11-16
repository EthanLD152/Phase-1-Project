fetchCrypto()


const cryptoId = document.querySelector("#cryptoId")
const cryptoContainer = document.querySelector("#container")
const cryptoPrice = document.querySelector("#price")
const cryptoRate = document.querySelector("#rate")
const searchResultContainer = document.querySelector("#searchResultContainer")


let cryptos = []

function fetchCrypto() {
  fetch(`http://localhost:3000/crypto`)
    .then(r => r.json())
    .then(data => {
      cryptos = data;
        data.map(cryptoInfo => {
          const h1 = document.createElement("h1")
          h1.textContent = cryptoInfo.name

          const h2 = document.createElement("h2")
          h2.textContent = cryptoInfo.price

          const h3 = document.createElement("h3")
          h3.textContent = cryptoInfo.dropRate

          const newBtn = document.createElement("button")
          newBtn.textContent = "like ♡"
          handleLikeFunc(newBtn)

          cryptoContainer.append(h1)
          cryptoContainer.append(h2, h3, newBtn)
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
  cryptoContainer.style.display = 'none'
  let userInput = document.getElementById("cryptoNameInput").value;
  const foundCrypto = cryptos.find((crypto) => {
    return crypto.name === userInput
  })

  const searchedName = document.createElement("h1")
  searchedName.textContent = foundCrypto.name;
  const searchedPrice = document.createElement("h2")
  searchedPrice.textContent = foundCrypto.price;
  const searchedDropRate = document.createElement("h3")
  searchedDropRate.textContent = foundCrypto.dropRate;

  searchResultContainer.append(searchedName, searchedPrice, searchedDropRate)
  searchResultContainer.style.display = 'block'
  showAllBtn.style.display = 'block'
}

const showAllBtn = document.querySelector(".show-all-btn");
showAllBtn.addEventListener('click', handleShowAllBtn)
showAllBtn.style.display = 'none'

function handleShowAllBtn() {
  showAllBtn.style.display = 'none'
  searchResultContainer.style.display = 'none'
  cryptoContainer.style.display = 'block'
  searchResultContainer.textContent = "";
}

let userInputField = document.getElementById("cryptoNameInput")
userInputField.addEventListener('focus', (event) => {
  event.target.style.background = "cadetblue"
})






















