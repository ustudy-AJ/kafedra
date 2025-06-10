import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IKafedra,  } from '../../mock-data/kafedra.mock';
import { ITeacher } from '../../mock-data/teacher.mock';
import { ISubject,  } from '../../mock-data/subject.mock';
import { TeacherComponent } from '../../components/teacher/teacher.component';
import { HomeService } from './home.service';
import { TeacherService } from '../../components/teacher/teacher.service';
import { SubjetService } from '../subjects/subject/subject.service';
import { KafedraService } from '../kafedralar/kafedra/kafedra.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TeacherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  private homeService: HomeService = inject(HomeService);
  private teacherService: TeacherService = inject(TeacherService);
  private subjectService: SubjetService = inject(SubjetService);
  private kafedraService: KafedraService = inject(KafedraService);


  kafedra: IKafedra[] = this.kafedraService.kafedraData;
  teachers: ITeacher[] = this.teacherService.teachersData;
  subjects: ISubject[] = this.subjectService.subjectData;

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
