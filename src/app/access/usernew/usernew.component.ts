import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-usernew',
  templateUrl: './usernew.component.html',
  styleUrls: ['./usernew.component.css']
})
export class UsernewComponent implements OnInit {

  usernewForm = this.fb.group({

   
    dni: ['', Validators.required],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    perfil: ['', Validators.required]


  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.usernewForm.valid){
      console.log(this.usernewForm.value);

    }else{
      alert("usuario no valido");
    }
  }

  ngOnInit(): void {
  }

}
