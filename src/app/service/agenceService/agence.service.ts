import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../authService/auth.service';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getAgence(){
    const idAgence = this.authService.userData.getValue().idAgence;
    return this.httpClient.get(`${environment.apiUrl}/agences/${idAgence}`);
  }
}
