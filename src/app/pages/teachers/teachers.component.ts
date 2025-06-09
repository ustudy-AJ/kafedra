import { Component, inject } from '@angular/core';
import { ITeacher } from '../../mock-data/teacher.mock';
import { CommonModule } from '@angular/common';
import { TeacherService } from '../../components/teacher/teacher.service';

@Component({
  selector: 'app-teachers',
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export default class TeachersComponent {
  private teacherService: TeacherService = inject(TeacherService);
  teachers: ITeacher[] = [
    {
      id: 1, fullName: 'Alice Johnson',
      imgLink: ''
    },
    {
      id: 2, fullName: 'Bob Smith',
      imgLink: ''
    },
  ];

  ngOnInit(){
    this.teacherService.getTeachers().subscribe(v=>{
      this.teachers =  this.teacherService.teacherMap(v);
    })
  }

  editTeacher(teacher: ITeacher): void {

  }

  deleteTeacher(id: number): void {
    this.teacherService.delete(id);
  }
}
