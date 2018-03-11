import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
