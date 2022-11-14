import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  reservarForm = this.fb.group({
    firtsname: [''],
    lastsname: [''],
    email: [''],
    date: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}