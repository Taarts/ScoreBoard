import "/src/style.css";
const state = {
  player1: "",
  player2: ""
};
alert();
let userScore = 0;
let computerScore = 0;
let counter = 0;
function setupRoshambo(id) {
  const rockBtn = document.querySelector(`.${id} #rock`);
  console.log(rockBtn);
  const paperBtn = document.querySelector(`.${id} button.paper`);
  const scissorsBtn = document.querySelector(
    `.${id} button.scissors`
  );
  function handleClickButton(event) {
    const thingCLickedOn = event.target;
    if (thingCLickedOn instanceof HTMLButtonElement) {
      if (thingCLickedOn.classList.contains("active")) {
        console.log("Clicked on");
      }
    }
  }
  function handleSelectRock(_event) {
    state[id] = "rock";
    console.log(state);
  }
  function handleSelectPaper(_event) {
    state[id] = "paper";
    console.log(state);
  }
  function handleSelectScissors(_event) {
    state[id] = "scissors";
    console.log(state);
  }
  rockBtn?.addEventListener("click", handleSelectRock);
  paperBtn?.addEventListener("click", handleSelectPaper);
  scissorsBtn?.addEventListener("click", handleSelectScissors);
  const tt = document.querySelector("button");
  if (tt instanceof HTMLButtonElement) {
    tt?.addEventListener("click", handleClickButton);
  }
}
const winner = state.player1 || state.player2;
function displayResult() {
  if (state.player1 === "" || state.player2 === "")
    return;
  if (state.player1 === state.player2) {
    ;
    "Tie";
  } else if (state.player1 === "rock" && state.player2 === "paper") {
    ;
    "Player 2 wins";
  }
}
setupRoshambo("player1");
setupRoshambo("player2");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmljaWExL3NkZy9Sb3NoYW1ib0pTL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnXG4vLyBpbXBvcnQgeyBzZXR1cENvdW50ZXIgfSBmcm9tICcuL2NvdW50ZXInXG5cbmNvbnN0IHN0YXRlID0ge1xuICBwbGF5ZXIxOiAnJyxcbiAgcGxheWVyMjogJycsXG59XG5hbGVydCgpXG5sZXQgdXNlclNjb3JlOiBudW1iZXIgPSAwXG5sZXQgY29tcHV0ZXJTY29yZTogbnVtYmVyID0gMFxubGV0IGNvdW50ZXI6IG51bWJlciA9IDBcblxuZnVuY3Rpb24gc2V0dXBSb3NoYW1ibyhpZDogJ3BsYXllcjEnIHwgJ3BsYXllcjInKSB7XG4gIGNvbnN0IHJvY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpZH0gI3JvY2tgKSBhcyBIVE1MRWxlbWVudFxuICBjb25zb2xlLmxvZyhyb2NrQnRuKVxuICBjb25zdCBwYXBlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfSBidXR0b24ucGFwZXJgKSBhcyBIVE1MRWxlbWVudFxuICBjb25zdCBzY2lzc29yc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke2lkfSBidXR0b24uc2Npc3NvcnNgXG4gICkgYXMgSFRNTEVsZW1lbnRcblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja0J1dHRvbihldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHRoaW5nQ0xpY2tlZE9uID0gZXZlbnQudGFyZ2V0XG4gICAgaWYgKHRoaW5nQ0xpY2tlZE9uIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGluZ0NMaWNrZWRPbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIG9uJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RSb2NrKF9ldmVudDogTW91c2VFdmVudCkge1xuICAgIHN0YXRlW2lkXSA9ICdyb2NrJ1xuICAgIC8vIHNlbGVjdENvbmRpdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdFBhcGVyKF9ldmVudDogTW91c2VFdmVudCkge1xuICAgIHN0YXRlW2lkXSA9ICdwYXBlcidcbiAgICAvLyAgIHBhcGVyQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0U2Npc3NvcnMoX2V2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgc3RhdGVbaWRdID0gJ3NjaXNzb3JzJ1xuICAgIC8vICAgc2Npc3NvcnNCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgfVxuXG4gIHJvY2tCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VsZWN0Um9jaylcblxuICBwYXBlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWxlY3RQYXBlcilcblxuICBzY2lzc29yc0J0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWxlY3RTY2lzc29ycylcbiAgY29uc3QgdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuICBpZiAodHQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgIHR0Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrQnV0dG9uKVxuICB9XG59XG5cbi8vIGNvbnN0IHJlc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICAgJyNyZXN0YXJ0J1xuLy8gKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuXG4vLyBmdW5jdGlvbiByZXN0YXJ0KF9ldmVudDogRXZlbnQpIHtcbi8vICAgc3RhdGUucGxheWVyMSA9ICcnXG4vLyAgIHN0YXRlLnBsYXllcjIgPSAnJ1xuLy8gfVxuLy8gcmVzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0KVxuXG5jb25zdCB3aW5uZXIgPSBzdGF0ZS5wbGF5ZXIxIHx8IHN0YXRlLnBsYXllcjJcbi8vIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKSBhcyBIVE1MRWxlbWVudFxuXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0KCkge1xuICBpZiAoc3RhdGUucGxheWVyMSA9PT0gJycgfHwgc3RhdGUucGxheWVyMiA9PT0gJycpIHJldHVyblxuICBpZiAoc3RhdGUucGxheWVyMSA9PT0gc3RhdGUucGxheWVyMikge1xuICAgIDsoJ1RpZScpXG4gIH0gZWxzZSBpZiAoc3RhdGUucGxheWVyMSA9PT0gJ3JvY2snICYmIHN0YXRlLnBsYXllcjIgPT09ICdwYXBlcicpIHtcbiAgICA7KCdQbGF5ZXIgMiB3aW5zJylcbiAgfVxuICAvLyBlbHNlIGlmIChzdGF0ZS5wbGF5ZXIxID09PSAncm9jaycgJiYgc3RhdGUucGxheWVyMiA9PT0gJ3NjaXNzb3JzJykge1xuICAvLyAgIDsoJ1BsYXllciAxIHdpbnMnKVxuICAvLyB9IGVsc2UgaWYgKHN0YXRlLnBsYXllcjEgPT09ICdzY2lzc29ycycgJiYgc3RhdGUucGxheWVyMiA9PT0gJ3BhcGVyJykge1xuICAvLyAgIDsoJ1BsYXllciAxIHdpbnMnKVxuICAvLyB9IGVsc2UgaWYgKHN0YXRlLnBsYXllcjEgPT09ICdwYXBlcicgJiYgc3RhdGUucGxheWVyMiA9PT0gJ3NjaXNzb3JzJykge1xuICAvLyAgIDsoJ1BsYXllciAyIHdpbnMnKVxuICAvLyB9XG59XG5cbnNldHVwUm9zaGFtYm8oJ3BsYXllcjEnKVxuc2V0dXBSb3NoYW1ibygncGxheWVyMicpXG4vLyBzZXR1cENvdW50ZXIoJ2NvdW50ZXInKVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBR1AsTUFBTSxRQUFRO0FBQUEsRUFDWixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQ1g7QUFDQSxNQUFNO0FBQ04sSUFBSSxZQUFvQjtBQUN4QixJQUFJLGdCQUF3QjtBQUM1QixJQUFJLFVBQWtCO0FBRXRCLFNBQVMsY0FBYyxJQUEyQjtBQUNoRCxRQUFNLFVBQVUsU0FBUyxjQUFjLElBQUksVUFBVTtBQUNyRCxVQUFRLElBQUksT0FBTztBQUNuQixRQUFNLFdBQVcsU0FBUyxjQUFjLElBQUksaUJBQWlCO0FBQzdELFFBQU0sY0FBYyxTQUFTO0FBQUEsSUFDM0IsSUFBSTtBQUFBLEVBQ047QUFFQSxXQUFTLGtCQUFrQixPQUFtQjtBQUM1QyxVQUFNLGlCQUFpQixNQUFNO0FBQzdCLFFBQUksMEJBQTBCLG1CQUFtQjtBQUMvQyxVQUFJLGVBQWUsVUFBVSxTQUFTLFFBQVEsR0FBRztBQUMvQyxnQkFBUSxJQUFJLFlBQVk7QUFBQSxNQUMxQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsV0FBUyxpQkFBaUIsUUFBb0I7QUFDNUMsVUFBTSxNQUFNO0FBRVosWUFBUSxJQUFJLEtBQUs7QUFBQSxFQUNuQjtBQUNBLFdBQVMsa0JBQWtCLFFBQW9CO0FBQzdDLFVBQU0sTUFBTTtBQUVaLFlBQVEsSUFBSSxLQUFLO0FBQUEsRUFDbkI7QUFDQSxXQUFTLHFCQUFxQixRQUFvQjtBQUNoRCxVQUFNLE1BQU07QUFFWixZQUFRLElBQUksS0FBSztBQUFBLEVBQ25CO0FBRUEsV0FBUyxpQkFBaUIsU0FBUyxnQkFBZ0I7QUFFbkQsWUFBVSxpQkFBaUIsU0FBUyxpQkFBaUI7QUFFckQsZUFBYSxpQkFBaUIsU0FBUyxvQkFBb0I7QUFDM0QsUUFBTSxLQUFLLFNBQVMsY0FBYyxRQUFRO0FBQzFDLE1BQUksY0FBYyxtQkFBbUI7QUFDbkMsUUFBSSxpQkFBaUIsU0FBUyxpQkFBaUI7QUFBQSxFQUNqRDtBQUNGO0FBWUEsTUFBTSxTQUFTLE1BQU0sV0FBVyxNQUFNO0FBR3RDLFNBQVMsZ0JBQWdCO0FBQ3ZCLE1BQUksTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZO0FBQUk7QUFDbEQsTUFBSSxNQUFNLFlBQVksTUFBTSxTQUFTO0FBQ25DO0FBQUMsSUFBQztBQUFBLEVBQ0osV0FBVyxNQUFNLFlBQVksVUFBVSxNQUFNLFlBQVksU0FBUztBQUNoRTtBQUFDLElBQUM7QUFBQSxFQUNKO0FBUUY7QUFFQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxTQUFTOyIsIm5hbWVzIjpbXX0=