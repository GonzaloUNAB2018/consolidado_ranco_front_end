import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/posts').pipe(map(data=>{})).subscribe(result => {
      console.log(result);
    });
  }

}
