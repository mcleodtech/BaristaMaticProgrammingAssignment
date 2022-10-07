import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BaristaMaticProgrammingAssignment';

  public drinkStatus: string = ""

  getDrinkStatus(e: string) {
    this.drinkStatus = e
  }

}