import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataServiceService {
  menuStatus = new Subject<string>();

  constructor() { }

}
