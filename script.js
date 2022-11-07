window.addEventListener("DOMContentLoaded", () => {
  fetchCrypto()
})

const cryptoId = document.querySelector("#cryptoId")
const cryptoContainer = document.querySelector("#container")
const cryptoPrice = document.querySelector("#price")
const cryptoRate = document.querySelector("#rate")
const etheriumContainer = document.querySelector("#etheriumContainer")
const bitcoinContainer = document.querySelector("#bitcoinContainer")
const litecoinContainer = document.querySelector("#litecoinContainer")
const dogecoinContainer = document.querySelector("#dogecoinContainer")
const binanceContainer = document.querySelector("#binanceContainer")



function fetchCrypto() {
  fetch(`http://localhost:3000/crypto`)
    .then(r => r.json())
    .then(data => {
        data.find(search)
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

const div = document.createElement("div");




function search(crypto) {
  const form = document.querySelector("#search");

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const searchTerm = document.querySelector("#id").value
      document.querySelector("#id").value = ""

          if(searchTerm === "ETHERIUM") {
          cryptoContainer.style.display = "none"
          console.log(crypto.name)
          etheriumContainer.append(crypto)
        } else if (searchTerm === "BITCOIN") {
          etheriumContainer.style.display = "none"
          bitcoinContainer.append(crypto)
        } else if(searchTerm === "LITECOIN") {
          litecoinContainer.append(crypto.name)
        } else if(searchTerm === "DOGECOIN") {
          dogecoinContainer.append(crypto.name)
        } else if(searchTerm === "BINANCE") {
          binanceContainer.append(crypto.name)
        }
    })
}







// console.log(cryptoContainer.find(search))


//.find method to grab cypto object i need


//descriptive names

//11 - 24 call bacl extracted to seperate function

//spacing indentation







