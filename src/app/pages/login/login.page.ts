import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  tryLogin() {
    this.authService.getAuthenticationByGoogle();
    console.log("testando");
  }

}
