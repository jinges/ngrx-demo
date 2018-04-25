/*
 * @Author: 大明冯
 * @Date: 2018-04-24 15:07:47
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-24 15:17:22
 */

import * as fromCalculator from './calculator';
import { calculator } from '../model/calculator';

export const reducers = {
  calculator: fromCalculator.reducer
};

export interface State{
  calculator: calculator
}

export const getContentState = (state: State) => state.calculator.content.join('');

export const getResultState = (state: State) => state.calculator.compute;
