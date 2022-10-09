import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BaristaMatic';

  public drinkStatus: string = ""

  getDrinkStatus(e: string) {
    this.drinkStatus = e
  }
}