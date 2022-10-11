p:

- Assign an event to the input fields to automatically change the team's name as the user types.

<--> Had to create a fieldInput for the "field" input querySelector AND an targetHTwo to change the Name of the team playing

- Assign click events to the buttons to update the corresponding values on the page. The score buttons should adjust the current score by a "hard-coded" value.

<--> plusButton - querySelector to add & a qS to target the number value.
Implement the score at 0, create a function 'handleClickOnPlus' to increment the score up by one each time "+" is clicked.
Then 'overwrite' the score adding one each time + is clicked...

<i>now the same for " - " <--- cute eyelashes> </i>
<--> created 'handleClickOnMinus' to decrease the score by one each time - is clicked

Parent: class team1 team2
child: i.add

- Deploy your site.

Part 2:

-     Add an if statement to stop each team's score from going below 0.
-     Add an if statement to stop each team's score from going above 21.
-     When a team gets 21 points, display a message to the user of who won.

  <--> added a "team win" window @21 and prevent from going lower that 0

-     Add a reset button that resets the scoreboard back to each team having 0 points.

  <--> reset properties work,
  <--> added reset button
  main {
  display: flex;
  gap: 1rem; //added
  flex-flow: row wrap;
  justify-content: center; //changed to "center"
  padding: 2rem;
  }

  button {
  /_ display: flex; _/
  align-self: flex-end;
  justify-content: center;
  border-radius: 999px;
  border: none;
  padding: 0.3rem 1rem;
  }

Reset button works!
Both scoreboards are operational and the scoreboard title changes when a team wins
