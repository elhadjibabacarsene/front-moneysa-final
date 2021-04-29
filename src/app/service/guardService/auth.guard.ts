import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../authService/auth.service';
import {map, take} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.alertCtrl.create({
            header: 'Accès non autorisé',
            message: 'Vous n\'avez pas les autorisations requises.',
            buttons: ['OK']
          }).then(alert => alert.present());
          this.router.navigate(['/']);
          return false;
        }else{
          return true;
        }
      })
    );
  }
}
