import { ITeacher } from "./teacher.mock"

export interface ISubject{
  id: number,
  name: string,
  type: string,
  longTime: number,
  teacher?: ITeacher,
}

// export let SubjectData: ISubject[] = [
//   {
//     id: 1,
//     name: "Matematika",
//     type: "Sirtqi",
//     longTime: 120,
//     teacher: TeachersData[0]
//   },
//   {
//     id: 2,
//     name: "English",
//     type: "Ochniy",
//     longTime: 140,
//     teacher: TeachersData[3]
//   },
//   {
//     id: 3,
//     name: "Akademik yozuv",
//     type: "Sirtqi",
//     longTime: 160,
//     teacher: TeachersData[5]
//   },
//   {
//     id: 4,
//     name: "Fizika",
//     type: "Ochniy",
//     longTime: 80,
//     teacher: TeachersData[2]
//   },
//   {
//     id: 5,
//     name: "Dasturlash",
//     type: "Ochniy",
//     longTime: 140,
//     teacher: TeachersData[1]
//   },
//   {
//     id: 6,
//     name: "Tarix",
//     type: "Sirtqi",
//     longTime: 160,
//     teacher: TeachersData[6]
//   },
//   {
//     id: 7,
//     name: "Dinshunoslik",
//     type: "Ochniy",
//     longTime: 80,
//     teacher: TeachersData[4]
//   },
//   {
//     id: 8,
//     name: "Rus tili",
//     type: "Sirtqi",
//     longTime: 80,
//     teacher: TeachersData[4]
//   }
// ]

