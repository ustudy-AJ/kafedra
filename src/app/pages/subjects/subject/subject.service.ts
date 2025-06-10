import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ISubject } from "../../../mock-data/subject.mock";
import { TeacherService } from "../../../components/teacher/teacher.service";


@Injectable({
  providedIn: "root"
})
export class SubjetService{
  private teacherService: TeacherService = inject(TeacherService);
  private teachersData = this.teacherService.teachersData;


  public subjectData: ISubject[] = [
    {
      id: 1,
      name: "Matematika",
      type: "Sirtqi",
      longTime: 120,
      teacher: this.teachersData[0]
    },
    {
      id: 2,
      name: "English",
      type: "Ochniy",
      longTime: 140,
      teacher: this.teachersData[3]
    },
    {
      id: 3,
      name: "Akademik yozuv",
      type: "Sirtqi",
      longTime: 160,
      teacher: this.teachersData[5]
    },
    {
      id: 4,
      name: "Fizika",
      type: "Ochniy",
      longTime: 80,
      teacher: this.teachersData[2]
    },
    {
      id: 5,
      name: "Dasturlash",
      type: "Ochniy",
      longTime: 140,
      teacher: this.teachersData[1]
    },
    {
      id: 6,
      name: "Tarix",
      type: "Sirtqi",
      longTime: 160,
      teacher: this.teachersData[6]
    },
    {
      id: 7,
      name: "Dinshunoslik",
      type: "Ochniy",
      longTime: 80,
      teacher: this.teachersData[4]
    },
    {
      id: 8,
      name: "Rus tili",
      type: "Sirtqi",
      longTime: 80,
      teacher: this.teachersData[4]
    }
  ]

  private http: HttpClient = inject(HttpClient);
  private httpStr = "http://172.20.10.3:8000/main/";


  subjectMap(subjectList: any): any{
    let list:ISubject[] = [];
    for(let i =0 ;i<subjectList.length;i++){
      list.push(
        {
          id: subjectList[i].id,
          name: subjectList[i].name,
          type: subjectList[i].talim_yunalishi,
          longTime: 120,
          teacher: undefined
        }
      )
    }
    return list;
  };

  getSubjects(){
    return this.http.get(this.httpStr + "fan-list/");
  }

  deleteSubject(id: number): void {
    this.subjectData = this.subjectData.filter(v=>v.id!=id);
  }
}
