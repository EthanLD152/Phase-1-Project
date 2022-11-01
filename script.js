window.addEventListener("DOMContentLoaded", () => {
  fetchCrypto()
})

const cryptoId = document.querySelector("#cryptoId")
const cryptoContainer = document.querySelector("#container")
const cryptoPrice = document.querySelector("#price")
const cryptoRate = document.querySelector("#rate")
const searchContainer = document.querySelector("#searchContainer")



function fetchCrypto() {
  fetch(`http://localhost:3000/crypto`)
    .then(r => r.json())
    .then(data => {
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
          search(cryptoInfo, h1, h2, h3)

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



function search(cryptoInfo, h1, h2, h3) {
const turnArray = Object.entries(cryptoInfo)

  const form = document.querySelector("#search");

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = document.querySelector("#id").value
    document.querySelector("#id").value = ""

    const find = turnArray.find((cryptoInfo) => {
      console.log(cryptoInfo.name === searchTerm)

    })
  })



  }

// console.log(cryptoContainer.find(search))


//.find method to grab cypto object i need

//create div element for each crypto and append(prefer)

//descriptive names

//11 - 24 call bacl extracted to seperate function

//spacing indentation
//append to cryptoContainer/ use the variable to access dynamic values







