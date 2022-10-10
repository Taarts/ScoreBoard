import './style.css'
// let pointsScore = 0

const fieldInput = document.querySelector('.team1 input')
const targetHTwo = document.querySelector('.team1 h2')!
// const freshInputs = document.querySelectorAll('input')!

// freshInputs.forEach((input) => (input.value = ''))
function newNameInput(event: Event) {
  const changeName = event.target

  if (changeName instanceof HTMLInputElement) {
    const currentValue = changeName.value
    targetHTwo.innerHTML = currentValue
  }
}
fieldInput?.addEventListener('input', newNameInput)
