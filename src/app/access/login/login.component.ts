import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

    }else{
      alert("formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
