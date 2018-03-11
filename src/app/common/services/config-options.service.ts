import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

export interface Config {
  login: string;
  id: number;
  email: string;
}

@Injectable()
export class ConfigOptionsService {
  private readonly KEY = 'store_app_config';
  constructor(private service: LocalStorageService, private http: HttpClient) {
    this.init();
  }

  private async init() {
    if (!this.get()) {
      let cfgNew = await this.http.get<Config>('/assets/app-config.json').toPromise()
        .catch(x => null);

      if (!cfgNew || !Object.keys(cfgNew).length) {
        cfgNew = this.getDefault();
      }

      this.save(cfgNew);
    }
  }

  private getDefault(): Config {
    return {
      id: 0,
      email: 'none',
      login: 'empty'
    };
  }

  get(): Config {
    return this.service.getItem(this.KEY);
  }

  save(cfg: Config) {
    this.service.setItem(this.KEY, cfg);
  }
}
