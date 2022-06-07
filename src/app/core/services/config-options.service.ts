import {Injectable} from "@angular/core";

interface ConfigModel {
  id?: string;
  email?: string;
  login?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  config!: ConfigModel;

  setConfig({ id, login, ...config }: Partial<ConfigModel>): void {
    this.config = { id, login, ...config };
  }
  getConfig(): ConfigModel {
    return this.config;
  }
  setConfigProperty(key: string, value: any): void {
    this.config = {...this.config, [key]: value }
  }
}
