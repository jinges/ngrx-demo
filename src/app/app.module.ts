import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';


import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MonitorComponent } from './monitor/monitor.component';
import { CalculatorPipe } from './pipe/calculator.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    MonitorComponent,
    CalculatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
