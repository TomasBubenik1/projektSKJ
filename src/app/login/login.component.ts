import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginObj: any = {
  username: '',
  password: '',
};
constructor(private router: Router){}

ngOnInit(): void {
}
onLogin(){
  if(this.loginObj.username == 'a' && this.loginObj.password == 'a'){
    this.router.navigate(['/admin']);
  }
  else{alert(this.loginObj.username)}
}
}
