import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  addStudent(data:any){
    return this.http.post('http://localhost:3000/students',data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
  getAllStudents(){
    return this.http.get('http://localhost:3000/students').pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStudent(data:any,id:number){
    return this.http.put('http://localhost:3000/students/' +id, data).pipe(map((res:any)=>{return res;}))
  }

  deleteStudent(id:number){
    return this.http.delete('http://localhost:3000/students/'+id).pipe(map((res:any)=>{return res;}))
  }
}