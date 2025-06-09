import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IKafedra, KafedraData } from '../../mock-data/kafedra.mock';
import { ITeacher, TeachersData } from '../../mock-data/teacher.mock';
import { ISubject, SubjectData } from '../../mock-data/subject.mock';
import { TeacherComponent } from '../../components/teacher/teacher.component';
import { HomeService } from './home.service';
import { TeacherService } from '../../components/teacher/teacher.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TeacherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  private homeService: HomeService = inject(HomeService);
  private teacherService: TeacherService = inject(TeacherService);


  // kafedra: IKafedra[] = KafedraData;
  // teachers: ITeacher[] = TeachersData;
  // subjects: ISubject[] = SubjectData;
  kafedra: IKafedra[] = [];
  teachers: ITeacher[] = [];
  subjects: ISubject[] = [];

  kafedraLen: number = 4;
  teacherLen: number = 4;
  subjectLen: number = 4;

  kafedraLenChange(){
    this.kafedraLen += 4;
  }
  subjectLenChange(){
    this.subjectLen += 4;
  }
  teacherLenChange(){
    this.teacherLen += 4;
  }

  ngOnInit(){
    this.homeService.getSubjects().subscribe((subjectList:any)=>{

      this.subjects =  this.homeService.subjectMap(subjectList);
      console.log(this.subjects);
    })

    this.teacherService.getTeachers().subscribe(v=>{
      this.teachers = this.teacherService.teacherMap(v);
    })
  }
}
