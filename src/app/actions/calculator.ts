/*
 * @Author: 大明冯
 * @Date: 2018-04-24 11:48:59
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-24 14:20:31
 */

import { Action } from '@ngrx/store';

export const WRITECONTENT = '[Content] Write';
export const DELETCONTENT = '[Content] Delete';
export const COMPUTERESULT = '[Result] Compute';



export interface calculator {
  content: String;
  compute: Boolean;
}

export class WriteContentAction implements Action {
  type = WRITECONTENT;
  constructor(public payload: calculator) {
    this.payload = payload;
  }
}

export class DeleteContentAction implements Action {
  type = DELETCONTENT;

  constructor(public payload: calculator = {content: '', compute: false}) {
    this.payload = payload;
  }
}

export class ComputeResultAction implements Action {
  type = COMPUTERESULT;
  constructor(public payload: calculator = {content: '', compute: true}) {
    this.payload = payload;
  }
}

export type Actions = WriteContentAction | DeleteContentAction | ComputeResultAction;
