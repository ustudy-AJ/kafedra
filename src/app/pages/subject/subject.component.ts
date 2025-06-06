import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject, SubjectData } from '../../mock-data/subject.mock';

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

  ngOnInit(){
    let id = this.activeRouter.snapshot.params['id'];

    this.subject = SubjectData.find((v) => v.id==id);
    if(!this.subject){
      this.router.navigateByUrl("/home")
    }
  }
}
