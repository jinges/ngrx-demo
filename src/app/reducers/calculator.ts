/*
 * @Author: 大明冯
 * @Date: 2018-04-24 14:16:19
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-24 15:18:12
 */


import { ActionReducer, Action } from '@ngrx/store';
import * as Calculator from '../actions/calculator';
import {calculator} from './../model/calculator';

export function reducer(calculator: calculator = { content: [''], compute: false}, action: Calculator.Actions) {
  switch(action.type) {
    case Calculator.WRITECONTENT:
      return { content: [...calculator.content, ...[action.payload.content]], compute: action.payload.compute};
    case Calculator.DELETCONTENT:
      calculator.content.pop();
      return calculator;
    case Calculator.COMPUTERESULT:
      return {...calculator, ...{compute: true}};
    default:
      return calculator;
  }
}
