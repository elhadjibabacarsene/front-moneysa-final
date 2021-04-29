import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlertController, LoadingController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {TokenService} from '../tokenService/token.service';

const helper = new JwtHelperService();
const AUTH_API = environment.apiUrl + '/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  public userData = new BehaviorSubject(null);

  constructor(private http: HttpClient,
              private plt: Platform,
              private router: Router,
              private tokenService: TokenService,
              private loadingCtrl: LoadingController,
              private alertctrl: AlertController) {
    this.loadStoredToken();
  }

  login(credentials: { username: string, password: string }) {
    this.loadingCtrl
      .create({keyboardClose: true, message: 'Connexion...'})
      .then(loadingEl => {
        loadingEl.present().then(() => {
          this.http.post(AUTH_API, credentials).subscribe(data => {
            this.tokenService.saveToken(data['token']);
            const decoded = helper.decodeToken(data['token']);
            this.userData.next(decoded);
            loadingEl.dismiss();
            console.log(this.userData.getValue());
            this.router.navigate(['/home/tabs']);
          }, errorRes => {
            loadingEl.dismiss();
            const code = errorRes.error.code;
            let message = 'Une erreur est survenue';
            if (code === 401) {
              message = 'Login ou mot de passe incorrect !';
            }
            this.showAlert(message);
          });
        });
      });
  }

  loadStoredToken() {
    // On récupère la platform
    const platformObs = from(this.plt.ready());
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.tokenService.getToken());
      }),
      map(token => {
        if (token) {
          const decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  logout() {
    this.tokenService.removeToken().then(() => {
      this.router.navigate(['/login']);
      this.userData.next(null);
    });
  }

  isLoggedIn(){
    // On récupère le token
    this.tokenService.getToken().then(token => {
       if (!token){
         return false;
       }else{
         // On vérifie si le token est expiré
         return !helper.isTokenExpired(token);
       }
    });
    return false;
  }

  private showAlert(message: string) {
    this.alertctrl
      .create({header: 'Echec de la connexion', message, buttons: ['D\'accord']})
      .then(alertEl => {
        alertEl.present();
      });
  }
}
