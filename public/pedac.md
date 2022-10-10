p:

- Assign an event to the input fields to automatically change the team's name as the user types.

<--> Had to create a fieldInput for the "field" input querySelector AND an targetHTwo to change the Name of the team playing

- Assign click events to the buttons to update the corresponding values on the page. The score buttons should adjust the current score by a "hard-coded" value.

<--> plusButton - querySelector to add & a qS to target the number value.
Implement the score at 0, create a function 'handleClickOnPlus' to increment the score up by one each time "+" is clicked.
Then 'overwrite' the score adding one each time + is clicked...

<i>now the same for " - " <--- cute eyelashes> </i>
<--> created 'handleClickOnMinus' to decrease the score by one each time - is clicked

<--> added a "team win" window and prevent from going lower that 0

Parent: class team1 team2
child: i.add

- Deploy your site.
