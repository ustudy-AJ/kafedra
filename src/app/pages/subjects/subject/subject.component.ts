import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject } from '../../../mock-data/subject.mock';
import { SubjetService } from './subject.service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export default class SubjectComponent {
  subject?: ISubject;

  private activeRouter: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private subjectService: SubjetService = inject(SubjetService);

  ngOnInit(){
    let id = this.activeRouter.snapshot.params['id'];

    this.subject = this.subjectService.subjectData.find((v:ISubject) => v.id==id);
    if(!this.subject){
      this.router.navigateByUrl("/home")
    }
  }
}
