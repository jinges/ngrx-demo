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
  public math = '+'

  changeFirstNum(val): void {
    if (!isNaN(val)) {
      this.firstNum = parseFloat(val);
    }
    if (!isNaN(this.secdNum)) {
      this.result = this.compute(this.math, this.firstNum , this.secdNum);
    }
  }

  changeSecdNum(val): void {
    if (!isNaN(val)) {
      this.secdNum = parseFloat(val);
    }
    if (!isNaN(this.firstNum)) {
      this.result = this.compute(this.math, this.firstNum, this.secdNum);
    }
  }

  changeMathFun(val){
    this.math = val;
    this.result = this.compute(this.math, this.firstNum, this.secdNum);
  }

  compute(math, first, secd){
    switch (math) {
      case '+':
        return first + secd;
      case '-':
        return first - secd;
      case 'x':
        return first * secd;
      case '/':
        return first / secd;
    }
  }
}
