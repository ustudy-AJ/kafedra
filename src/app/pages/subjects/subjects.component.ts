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
  private subjectService: SubjetService = inject(SubjetService);

  subjects: ISubject[] = this.subjectService.subjectData;

  editSubject(subject: ISubject): void {
    console.log('Edit subject:', subject);
  }

  deleteSubject(id: number): void {
    this.subjectService.deleteSubject(id);
    this.subjects = this.subjectService.subjectData;
  }
}
