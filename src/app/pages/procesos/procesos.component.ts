import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {

  proceososForm = this.fb.group({

   
    dni: ['', Validators.required],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    perfil: ['', Validators.required]


  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.proceososForm.valid){
      console.log(this.proceososForm.value);

    }else{
      alert("reporte no valido");
    }
  }

  ngOnInit(): void {
  }

}
