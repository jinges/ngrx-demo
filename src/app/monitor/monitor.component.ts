import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  public content: Observable<any>;
  public result: Observable<any>;

  constructor(public store: Store<fromRoot.State>) {
    this.content = store.select(fromRoot.getContentState);
    this.result = store.select(fromRoot.getResultState);
  }

  ngOnInit() {
  }

}
