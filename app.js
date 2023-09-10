const subscribeBtn = document.querySelector('.subscribe-btn')
const input = document.querySelector('input')
const form = document.getElementById('form')
const errorMsg = document.querySelector('.error-msg')
const body = document.querySelector('body')
const container = document.querySelector('.container')

let successHTML = `
    <div class="success-msg-container">
    <div class="success-msg-content">
      <img class="success-icon" src="./assets/images/icon-success.svg">
      <p class="thanks-msg">Thanks for subscribing!</p>
      <p class="thanks-content">A confirmation email has been sent to <strong>ash@loremcompany.com</strong>.
        Please open it and click the button inside to confirm your subscription.</p>
    </div>
    <div class="dismiss-container">
      <button class="dismiss">Dismiss message</button>
    </div>
  </div>
    `

function checkInvalidStyle() {
  if (!input.checkValidity() || !input.value) {
    errorStyleDisplay(true)
  } else {
    errorStyleDisplay(false)
    displaySuccessMsg()
  }
}

function displaySuccessMsg() {
  container.style.display = 'none'
  body.insertAdjacentHTML('afterbegin', successHTML)
}

function errorStyleDisplay(state) {
  if (state === true) {
    input.style.border = '1px solid #FF6155'
    input.style.backgroundColor = 'rgba(255,97,85,0.15)'
    input.style.color = '#FF6155'
    errorMsg.style.display = 'inline'
  } else {
    input.style.border = '1px solid rgba(25, 24, 23, 0.25)'
    input.style.backgroundColor = 'white'
    input.style.color = 'rgba(36, 39, 66, 0.5)'
    errorMsg.style.display = 'none'
  }
}

subscribeBtn.addEventListener('click', (event) => {
  event.preventDefault()
  checkInvalidStyle()
})

