import { Injectable } from '@angular/core';
import {FormControl , FormGroup , Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  form = new FormGroup({
  	$key: new FormControl(null),
  	fullName: new FormControl('', Validators.required),
  	email: new FormControl('', Validators.email),
  	address: new FormControl('', Validators.required),
  	zip: new FormControl('', [Validators.required , Validators.minLength(4)])

  });
}
