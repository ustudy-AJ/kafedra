import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IKafedra } from "../../../mock-data/kafedra.mock";
import { TeacherService } from "../../../components/teacher/teacher.service";
import { SubjetService } from "../../subjects/subject/subject.service";


@Injectable({
  providedIn: "root"
})
export class KafedraService{
  private teacherService: TeacherService = inject(TeacherService);
  private subjectService: SubjetService = inject(SubjetService);

  private teachersData = this.teacherService.teachersData;
  private subjectData = this.subjectService.subjectData;

  public kafedraData: IKafedra[] = [
    {
      id: 1,
      name: "Kafedra №1",
      teachers: [this.teachersData[0],this.teachersData[3],this.teachersData[5],this.teachersData[2]],
      subjects: [this.subjectData[0],this.subjectData[1],this.subjectData[2],this.subjectData[3]]
    },
    {
      id: 2,
      name: "Kafedra №2",
      teachers: [this.teachersData[1],this.teachersData[6],this.teachersData[4]],
      subjects: [this.subjectData[4],this.subjectData[5],this.subjectData[6],this.subjectData[7]]
    }
  ]


  private http: HttpClient = inject(HttpClient);
  private httpStr = "http://172.20.10.3:8000/main/";


  kafedraMap(kafedraList: any): any{
    let list:IKafedra[] = [];
    for(let i =0 ;i<kafedraList.length;i++){
      list.push(
        {
          id: kafedraList[i].id,
          name: kafedraList[i].name,
          teachers: [],
          subjects: []
        }
      )
    }
    return list;
  };

  getkafedras(){
    return this.http.get(this.httpStr + "list-kafedra/");
  }
  delete(id: number) {
    return this.http.delete(this.httpStr + "kafedra/" + id + "/update/")
  }
  deleteMock(id: number) {
    this.kafedraData = this.kafedraData.filter(v=>v.id!=id);
  }
}
