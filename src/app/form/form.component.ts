import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm: FormGroup;
  userData = {
    firstName: '',
    lastName: '',
    passYear: '',
    class: '',
    percentage: ''
  };
  constructor() { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.regForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(20)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(20)
      ]),
      passYear: new FormControl('', [Validators.required,Validators.pattern('[0-9]{4}'), Validators.min(2017), Validators.max(9999)]),
      percentage: new FormControl('', [Validators.required,  Validators.pattern('[0-9]{2}')]),
      class: new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z0-9 \'\-]+$')]),
    });
  }

  signup(){
    alert('form succsesfully submitted!');
  }
}
