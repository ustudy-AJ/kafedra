import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IKafedra, KafedraData } from '../../mock-data/kafedra.mock';
import { ITeacher, TeachersData } from '../../mock-data/teacher.mock';
import { ISubject, SubjectData } from '../../mock-data/subject.mock';
import { TeacherComponent } from '../../components/teacher/teacher.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TeacherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  kafedra: IKafedra[] = KafedraData;
  teachers: ITeacher[] = TeachersData;
  subjects: ISubject[] = SubjectData;

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
}
