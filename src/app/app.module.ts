import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './service/authService/auth.service';
import {TokenService} from './service/tokenService/token.service';
import {IonicStorageModule} from '@ionic/storage';
import {TopbarComponent} from './views/topbar/topbar.component';
import {InterceptorService} from './service/interceptor/interceptor.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AuthService, TokenService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
