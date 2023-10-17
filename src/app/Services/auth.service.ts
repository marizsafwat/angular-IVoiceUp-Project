import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  currentEmail: string = '';
  basicUrl: string = environment.basicUrl;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) {}

  login(user: User) {
    //console.log('login');
    var valid = false;
    if (user.email !== '' && user.password !== '') {
      this.http
        .post<any>(
          this.basicUrl + '/api/Login',
          {
            email: user.email,
            password: user.password,
          },
          {
            responseType: 'text' as 'json',
          }
        )
        .subscribe({
          next: (res) => {
            if (JSON.parse(res).error) {
              alert('INVALID LOGIN CREDENTIALS');
            } else {
              //console.log(JSON.parse(res).error);
              this.loggedIn.next(true);
              valid = true;
              this.currentEmail = user.email;
              this.router.navigate(['/']);
            }
          },
          error: (err) => {
            alert(err.message);
          },
        });
    }
    return valid;
  }

  signUp(user: User) {
    //console.log('login');
    var valid = false;
    if (user.email !== '' && user.password !== '' && user.username !== '') {
      this.http
        .post<any>(
          this.basicUrl + '/api/SignUp',
          {
            email: user.email,
            password: user.password,
            username:user.username,
          },
          {
            responseType: 'text' as 'json',
          }
        )
        .subscribe({
          next: (res) => {
            if (JSON.parse(res).error) {
              alert('INVALID LOGIN CREDENTIALS');
            } else {
              //console.log(JSON.parse(res).error);
              this.loggedIn.next(true);
              valid = true;
              this.currentEmail = user.email;
              this.router.navigate(['/']);
            }
          },
          error: (err) => {
            alert(err.message);
          },
        });
    }
    return valid;
  }

  // logout() {
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }
}
