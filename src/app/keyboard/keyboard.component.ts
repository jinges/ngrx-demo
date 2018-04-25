import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { WriteContentAction, DeleteContentAction, ComputeResultAction } from '../actions/calculator';
import { debug } from 'util';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public content = '';
  public math = '+';
  public keyboards = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '='];
  public maths = ['C', '/', 'x', '-', '+'];
  public compute = false;

  constructor(public store: Store<fromRoot.State>) {

  }

  ngOnInit() {}

  keyboardFun(val) {
    if (val === 'C') {
      this.store.dispatch(new DeleteContentAction());
      const content = this.content;
      this.content = content.substring(0, content.length - 1);
      return;
    }

    if (/\D/.test(val) && /\D/.test(this.content.split('').pop())) {
      return;
    }

    if ((/\D/.test(val) && /\D/.test(this.content)) || val === '=') {
      this.compute = true;
      this.store.dispatch(new ComputeResultAction());
    }

    if (val === '=') {
      return;
    }
    this.content += val;
    this.store.dispatch(new WriteContentAction({ content: val, compute: this.compute }));
  }
}
