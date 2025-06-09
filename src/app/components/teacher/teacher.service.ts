import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ITeacher } from "../../mock-data/teacher.mock";


@Injectable({
  providedIn: "root"
})
export class TeacherService{

  private http: HttpClient = inject(HttpClient);
  private httpStr = "http://172.20.10.3:8000/main/";


  teacherMap(teacherList: any): any{
    let list:ITeacher[] = [];
    for(let i =0 ;i<teacherList.length;i++){
      list.push(
        {
          id: teacherList[i].id,
          fullName: teacherList[i].name,
          imgLink: ""
        }
      )
    }
    return list;
  };

  getTeachers(){
    return this.http.get(this.httpStr + "teacher-list/");
  }

  delete(id: number) {
    throw new Error('Method not implemented.');
  }
}
