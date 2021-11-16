import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

img1: string = "https://mls1iejiacfa.i.optimole.com/-rMZmvQ.sMX2~24f5f/w:940/h:788/q:90/https://www.bten.com.br/wp-content/uploads/2020/10/ESSA.png";

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder,private _http:HttpClient,
    private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }
  signUp(){
    this._http.post<any>("http://localhost:3000/registros", this.signupForm.value).subscribe(res=>{
      alert("Usuário Registrado!");
      this.signupForm.reset();
      this.router.navigate(['overview'])
  }, err=>{
    alert("Erro ao cadastrar-se!")
  }
    )
  }
}
