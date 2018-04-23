import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public firstNum: number;
  public secdNum: number;
  public result: number;

  changeFirstNum(val): void {
    if (!isNaN(val)) {
      this.firstNum = parseFloat(val);
    }
    if (!isNaN(this.secdNum)) {
      this.result = this.firstNum + this.secdNum;
    }
  }
  changeSecdNum(val): void {
    if (!isNaN(val)) {
      this.secdNum = parseFloat(val);
    }
    if (!isNaN(this.firstNum)) {
      this.result = this.firstNum + this.secdNum;
    }
  }
}
