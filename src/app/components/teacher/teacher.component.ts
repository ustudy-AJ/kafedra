import { Component, Input } from '@angular/core';
import { ITeacher } from '../../mock-data/teacher.mock';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  @Input() teacher!: ITeacher;
}
