const validateEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
  return reg.test(email)
}

document.querySelector('.form__button').addEventListener('click', (e) => {
  e.preventDefault()
  const emailInput = document.querySelector('#email')
  if (!validateEmail(emailInput.value)) {
    document.querySelector('.form__error').style.opacity = 1
    emailInput.style.borderColor= '#ff5263'
  }
  else {
    document.querySelector('#email').value = ''
    document.querySelector('.form__error').style.opacity = 0
    emailInput.style.borderColor= '#c2d3ff'
  }
})
