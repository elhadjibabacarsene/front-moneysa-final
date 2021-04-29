import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/authService/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    } else {
      const username = f.value.email;
      const password = f.value.password;
      this.authService.login({username, password});
    }
  }
}
