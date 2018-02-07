import { Injectable, InjectionToken } from '@angular/core';

export const CONST_TOKEN = new InjectionToken<any>('CONST_SERVICE_TOKEN');

@Injectable()
export class ConstantsService {

  constructor() { }

  getAll() {
    return { App: 'TaskManager', Ver: '1.0' };
  }
}
