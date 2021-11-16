import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:940/h:788/q:90/https://www.bten.com.br/wp-content/uploads/2020/10/ESSA.png";

  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
       email:[''],
       password:['']
    })
  }
  logIn(){
this._http.get<any>("http://localhost:3000/registros").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  })
  if(user){
    alert("Login Realizado!");
    this.loginForm.reset();
    this.router.navigate(['overview'])
  }else{
    alert("Usuario não Encontrado!!")
  }
},err=>{
 alert("Algo está errado novamente, do lado do servidor!")
}
)
  }
}
