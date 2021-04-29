import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {JwtHelperService} from '@auth0/angular-jwt';

const TOKEN_KEY = 'MONEY-SA::TOKEN';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private storage: Storage) { }
  public saveToken(token: any): void{
    this.storage.set(TOKEN_KEY, token);
  }
  public async getToken(): Promise<string | null> {
    return await this.storage.get(TOKEN_KEY);
  }
  public removeToken() {
    return this.storage.remove(TOKEN_KEY);
  }
}
