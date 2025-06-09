import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ISubject } from "../../../mock-data/subject.mock";


@Injectable({
  providedIn: "root"
})
export class SubjetService{
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
}
