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
    private kafedraService: KafedraService = inject(KafedraService);

  kafedras: IKafedra[] = this.kafedraService.kafedraData;

  editKafedra(kafedra: IKafedra): void {
    console.log('Edit kafedra:', kafedra);
  }

  deleteKafedra(id: number): void {
    this.kafedraService.deleteMock(id);
    this.kafedras = this.kafedraService.kafedraData;
  }
}
