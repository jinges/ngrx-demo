/*
 * @Author: 大明冯
 * @Date: 2018-04-25 18:15:06
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-25 18:27:17
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculator',
  pure: false
})

export class CalculatorPipe implements PipeTransform {
  evil(fn){
    return new Function('return '+ fn)();
  }
  transform(content: Array<String>) {
    debugger;
    return this.evil(content.join(''))
  };
};
