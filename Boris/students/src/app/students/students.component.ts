import { Component, OnInit } from '@angular/core';
import { StudentsService } from "../shared/students.service"
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public studentsService: StudentsService) { }
submitted: boolean;
  ngOnInit() {
  }

onSubmit(){
	if(this.studentsService.form.get("$key").value == null){
this.submitted = false; 
	} else {

	}
}
}
