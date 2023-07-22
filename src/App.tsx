import React, { Component } from 'react';
import './App.css';

interface State {
  regIssueDate: Date;
}

class App extends Component<{}, State> {
  constructor(props: {}){
    super(props)

    this.state = {
      regIssueDate: new Date(),
    } 
  }

  vizsgalat(){
      let {regIssueDate} = this.state;
      let returnDate;
      let returnTimeHour;
      let returnTimeMinute
      returnDate = regIssueDate.getDay() + 2;
      returnTimeHour = regIssueDate.getHours();
      returnTimeMinute = regIssueDate.getMinutes();

      if (regIssueDate.getHours() > 9 &&
        returnTimeHour < 17 &&
        regIssueDate.getDay() <=5) {
        alert('Sikeres hibabejelentés!')
        if (returnDate <= 5) {
          if (returnDate === 1) {
            returnDate = 'Hétfő'
          }
          else if (returnDate === 2) {
            returnDate = 'Kedd'
          }
          else if (returnDate === 3) {
            returnDate = 'Szerda'
          }
          alert('A visszaküldési dátum: ' + returnDate + ' ' + returnTimeHour + 'óra' + returnTimeMinute + "perc")
        } 
        else if (regIssueDate.getDay() === 4) {
          alert('A visszaküldési dátum: Hétfő ' + ' ' + returnTimeHour + 'óra' + returnTimeMinute + "perc")
        }
        else if (regIssueDate.getDay() === 5) {
          alert('A visszaküldési dátum: Kedd' + ' ' + returnTimeHour + 'óra' + returnTimeMinute + "perc")
        } 
      }
      else {
        alert('Jelenleg már nem fogadunk új hibát! Próbáld újra munkaidőben!')
      }
  }

  componentDidMount() {
    this.vizsgalat()
  }

  render() {
    return <div>
      <h1>Due Date Calculator Emarsys</h1> 
    </div>  
  }

  /* Útmutató
  regIssueDate: new Date() -> lekérdezi az aktuális dátumot, ezzel szimulálunk egy hibabejelentést.
  this.state.regIssueDate.getHours() | this.state.regIssueDate.getDay() -> lekérdezzük az órát, és a napot.
  Az órát, és a napot vizsgálat alá vetjük, és amennyiben munkaidőben vagyunk, szimulálunk egy sikeres hiba bejelentést.
  Egy változó értékének felvesszük az automatikus két nappal későbbi időpontot, mint visszaküldési idő.
  Ezt a változót vizsgáljuk, hogy milyen napra esik, és benne van-e a munkaidőben.
  Amennyiben nem vagyunk benne a munkaidőben, értesítésként felhívó üzenetet küldünk.
  */
  
}

export default App;
