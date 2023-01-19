import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from '../shared/property.service';
import { Student } from './students-dashboard.model';

@Component({
  selector: 'app-students-dashboard',
  templateUrl: './students-dashboard.component.html',
  styleUrls: ['./students-dashboard.component.css']
})
export class StudentsDashboardComponent {
allProperty:any;
formValue!:FormGroup;
studentModelObj:Student = new Student();
  constructor(private fb:FormBuilder, private api:PropertyService, private router:Router){}


  ngOnInit():void{
this.formValue = this.fb.group({
      firstname:[''],
      lastname:[''],
      class:[''],
      age:[''],
      birthdate:[''],
      section:[''],
      gender:[''],
      weight:[''],
      disabled:[''],
      achievements:['']

})
this.getAllStudents()
  }
  getAllStudents(){
    this.api.getAllStudents().subscribe((res)=>{this.allProperty=res;console.warn(this.allProperty)})
  }

  addStudent(){
this.studentModelObj.firstname = this.formValue.value.firstname;
this.studentModelObj.lastname = this.formValue.value.lastname;
this.studentModelObj.class = this.formValue.value.class
this.studentModelObj.age = this.formValue.value.age
this.studentModelObj.birthdate = this.formValue.value.birthdate
this.studentModelObj.section = this.formValue.value.section
this.studentModelObj.gender = this.formValue.value.gender
this.studentModelObj.weight = this.formValue.value.weight
this.studentModelObj.disabled = this.formValue.value.disabled
this.studentModelObj.achievements = this.formValue.value.achievements
this.api.addStudent(this.studentModelObj).subscribe((res)=>{
  console.log(res);
  alert("Student added succesfully!")
  this.formValue.reset();
  this.getAllStudents();
})
  }


  close(){

    this.formValue.reset();
  }
deleteStudent(data:any){
  this.api.deleteStudent(data.id).subscribe((res)=>{
    alert("Student deleted succesfully!")
    this.getAllStudents()
  })
}

logOut(){
  this.router.navigate(['/login']);
}

updateStudent(){
  
}


}

