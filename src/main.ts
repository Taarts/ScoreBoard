import './style.css'
let teamScore = 0

const fieldInput = document.querySelector('.team1 input')
const targetHTwo = document.querySelector('.team1 h2')!
const plusButton = document.querySelector('.add')
const minusButton = document.querySelector('.subtract')
const teamScoreValue = document.querySelector('.team1 h3')!
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
/* -----------------end name element -----------------*/

function handleClickOnPlus() {
  teamScore = teamScore + 1

  if (teamScoreValue instanceof HTMLElement) {
    teamScoreValue.textContent = `${teamScore}`
  }
  console.log(teamScoreValue)
}

plusButton?.addEventListener('click', handleClickOnPlus)

/*---------------- end plus button -------------------*/

function handleClickOnMinus() {
  teamScore = teamScore - 1

  if (teamScoreValue instanceof HTMLElement) {
    teamScoreValue.textContent = `${teamScore}`
  }
  console.log(teamScoreValue)
}

minusButton?.addEventListener('click', handleClickOnMinus)
/*---------------- end minus button -------------------*/
