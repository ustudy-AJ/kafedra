import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ITeacher } from "../../mock-data/teacher.mock";


@Injectable({
  providedIn: "root"
})
export class TeacherService{
  teachersData: ITeacher[] = [
  {
    fullName: "Sobirova Holida",
    imgLink: "./assets/imgs/image-1.png",
    id: 1
  },
  {
    fullName: "Kamilova Muhayyo",
    imgLink: "./assets/imgs/image-1.png",
    id: 2
  },
  {
    fullName: "Bohodirova Feruza",
    imgLink: "./assets/imgs/image-1.png",
    id: 3
  },
  {
    fullName: "Nigmatova Nargiza",
    imgLink: "./assets/imgs/image-1.png",
    id: 4
  },
  {
    fullName: "Allaberganova Muhayyo",
    imgLink: "./assets/imgs/image-1.png",
    id: 5
  },
  {
    fullName: "Farhodova Maftuna",
    imgLink: "./assets/imgs/image-1.png",
    id: 6
  },
  {
    fullName: "Akmalova Mahliyo",
    imgLink: "./assets/imgs/image-1.png",
    id: 6
  },
]

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
    this.teachersData = this.teachersData.filter(data => data.id != id);
  }
}
