import './style.css'
function setupTeam(id: string) {
  let teamScore = 0

  const fieldInput = document.querySelector(`.${id} input`) as HTMLInputElement
  const targetHTwo = document.querySelector(`.${id} h2`)! as HTMLHeadingElement
  const plusButton = document.querySelector(`.${id} .add`) as HTMLElement
  const minusButton = document.querySelector(`.${id} .subtract`) as HTMLElement
  const teamScoreValue = document.querySelector(
    `.${id} h3`
  )! as HTMLHeadingElement
  const resetButton = document.querySelector('.reset') as HTMLButtonElement
  const header = document.querySelector('h1')!

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
    if (teamScore === 21) {
      console.debug('Wooooah')
      alert(`${targetHTwo.innerHTML} is first to 21 & wins!`)
      header.textContent = `${targetHTwo.innerHTML} wins this round!`
      return
    }
    teamScore = teamScore + 1

    if (teamScoreValue instanceof HTMLElement) {
      teamScoreValue.textContent = `${teamScore}`
    }
    console.log(teamScoreValue)
  }

  plusButton?.addEventListener('click', handleClickOnPlus)

  /*---------------- end plus button -------------------*/

  function handleClickOnMinus() {
    if (teamScore === 0) {
      console.debug('cukup!')
      return
    }
    teamScore = teamScore - 1

    if (teamScoreValue instanceof HTMLElement) {
      teamScoreValue.textContent = `${teamScore}`
    }
    console.log(teamScoreValue)
  }

  minusButton?.addEventListener('click', handleClickOnMinus)
  /*---------------- end minus button -------------------*/

  function handleScoreReset(_event: Event) {
    teamScore = 0
    header.innerText = 'My Score Board'
    teamScoreValue.innerHTML = teamScore.toString()
    console.log('reset')
  }
  resetButton?.addEventListener('click', handleScoreReset)

  /*---------------- end reset score -------------------*/
}
setupTeam('team1')
setupTeam('team2')
