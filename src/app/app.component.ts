import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public content = '';
  public math = '+';
  public keyboards = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '='];
  public maths = ['C', '/', 'x', '-', '+'];

  keyboardFun(val){
    if(val == 'C') {
      const str = this.content;
      this.content = str.substring(0, str.length - 1)
      return;
    }
    if(/\D/.test(val) && /\D/.test(this.content)) {
      debugger
    }
    this.content += val

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
