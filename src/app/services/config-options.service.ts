import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface ConfigItem {
  login: string;
  id: number;
  email: string;
}

@Injectable()
export class ConfigOptionsService {
  private readonly KEY = 'store_app_config';
  constructor(private service: LocalStorageService) { }

  save(cfg: ConfigItem) {
    this.service.setItem(this.KEY, cfg);
  }

  get(): ConfigItem {
    return this.service.getItem(this.KEY);
  }
}
