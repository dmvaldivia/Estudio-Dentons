import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  reservarForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['',Validators.required]
    }),
    email: ['',[Validators.required, Validators.email]],
    date: ['', Validators.required],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

onSubmit() {
  if(this.reservarForm.valid) {
    console.log(this.reservarForm.value);
  } else {
    alert("formulario no valido");
  }

}

  ngOnInit(): void {
  }

}
