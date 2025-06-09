import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IKafedra } from "../../../mock-data/kafedra.mock";


@Injectable({
  providedIn: "root"
})
export class KafedraService{

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
    console.log(id);

    return this.http.delete(this.httpStr + "kafedra/" + id + "/update/")
  }
}
