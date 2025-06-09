import { Component, inject } from '@angular/core';
import { IKafedra } from '../../mock-data/kafedra.mock';
import { CommonModule } from '@angular/common';
import { KafedraService } from './kafedra/kafedra.service';

@Component({
  selector: 'app-kafedralar',
  imports: [CommonModule],
  templateUrl: './kafedralar.component.html',
  styleUrl: './kafedralar.component.scss'
})
export default class KafedralarComponent {
  private service: KafedraService = inject(KafedraService);

  kafedras: IKafedra[] = [

  ];

  ngOnInit(){
    console.log("dsa");

    this.service.getkafedras().subscribe(v=>{
      this.kafedras = this.service.kafedraMap(v);
    })
  }

  editKafedra(kafedra: IKafedra): void {
    console.log('Edit kafedra:', kafedra);
  }

  deleteKafedra(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.service.getkafedras().subscribe({
          next: (response) => {
            this.kafedras = this.service.kafedraMap(response);
          }
        });
      }
    });
  }

}
