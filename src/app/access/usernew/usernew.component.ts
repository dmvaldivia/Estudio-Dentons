import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usernew',
  templateUrl: './usernew.component.html',
  styleUrls: ['./usernew.component.css']
})
export class UsernewComponent implements OnInit {

  usernewForm = this.fb.group({

   
    loginUsuario: ['', Validators.required],
    passwordUsuario: ['', Validators.required],
    idPerfil: ["", Validators.required],
    nombres: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    documentoIdentidad: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private readonly userService: UserService) { }

  Insert(data:any){
    const header = {};

      this.userService.insert(data, header).subscribe((rest: any)=> {
        if(rest.isSuccess) {
          alert("Usuario creado con ID: "+ rest.data.id + "y Nombre: " + rest.data.nombre );

        }else {
          alert(rest.errorMessage);
         }
        })

  }

  onSubmit() {
    if(this.usernewForm.valid){
      this.Insert(this.usernewForm.value);

    }else{
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
