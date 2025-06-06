import { ISubject, SubjectData } from "./subject.mock";
import { ITeacher, TeachersData } from "./teacher.mock";

export interface IKafedra{
  id: number,
  name: string,
  teachers: ITeacher[],
  subjects: ISubject[],
}


export const KafedraData: IKafedra[] = [
  {
    id: 1,
    name: "Kafedra №1",
    teachers: [TeachersData[0],TeachersData[3],TeachersData[5],TeachersData[2]],
    subjects: [SubjectData[0],SubjectData[1],SubjectData[2],SubjectData[3]]
  },
  {
    id: 2,
    name: "Kafedra №2",
    teachers: [TeachersData[1],TeachersData[6],TeachersData[4]],
    subjects: [SubjectData[4],SubjectData[5],SubjectData[6],SubjectData[7]]
  }
]
