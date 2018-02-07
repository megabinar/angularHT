import { Injectable, InjectionToken } from '@angular/core';

export const GEN_TOKEN = new InjectionToken<any>('GEN_SERVICE_TOKEN');

@Injectable()
export class GeneratorService {
  private readonly all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  constructor(private n: number) { }

  generate() {
    const text = [];
    for (let i = 0; i < 5; i++) {
      text.push(this.all.charAt(Math.floor(Math.random() * this.all.length)));
    }

    return text.join('');
  }

}
