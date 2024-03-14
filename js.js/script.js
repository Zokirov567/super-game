const username = "Yura"

let bets = document.querySelectorAll('.bet')
bets.forEach((btn) => {
    btn.addEventListener('click', betSelector)
    btn.setAttribute('data-sum', btn.innerHTML)
})
 
function betSelector() {

    bets.forEach((btn) => {
    btn.classList.remove('selected')
    })
    
    let currentBtn = event.target
    currentBtn.classList.add('selected')

    betsum = currentBtn.getAttribute('data-sum')
    console.log(betsum)
}

