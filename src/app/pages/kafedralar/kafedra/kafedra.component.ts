import { Component, inject } from '@angular/core';
import { TeacherComponent } from '../../../components/teacher/teacher.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IKafedra, KafedraData } from '../../../mock-data/kafedra.mock';

@Component({
  selector: 'app-kafedra',
  imports: [TeacherComponent, RouterLink],
  templateUrl: './kafedra.component.html',
  styleUrl: './kafedra.component.scss'
})
export default class KafedraComponent {
  kafedra?: IKafedra;

  private activeRouter: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(){
    let id = this.activeRouter.snapshot.params['id'];

    this.kafedra = KafedraData.find((v) => v.id==id);
    if(!this.kafedra){
      this.router.navigateByUrl("/home")
    }
  }
}
