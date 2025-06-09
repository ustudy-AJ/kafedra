import { Component, inject } from '@angular/core';
import { ISubject } from '../../mock-data/subject.mock';
import { CommonModule } from '@angular/common';
import { SubjetService } from './subject/subject.service';

@Component({
  selector: 'app-subjects',
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export default class SubjectsComponent {
  private service: SubjetService = inject(SubjetService);
  subjects: ISubject[] = [
    // {
    //   id: 1,
    //   name: 'Mathematics',
    //   type: 'Theoretical',
    //   longTime: 90,
    //   teacher: {
    //     id: 101, fullName: 'Alice Johnson',
    //     imgLink: ''
    //   }
    // },
    // {
    //   id: 2,
    //   name: 'Chemistry Lab',
    //   type: 'Practical',
    //   longTime: 120,
    //   // no teacher assigned
    // }
  ];

  ngOnInit(){
    console.log("dsa");

    this.service.getSubjects().subscribe(v=>{
      this.subjects = this.service.subjectMap(v);
    })
  }

  editSubject(subject: ISubject): void {
    console.log('Edit subject:', subject);
  }

  deleteSubject(id: number): void {
    this.subjects = this.subjects.filter(s => s.id !== id);
  }
}
