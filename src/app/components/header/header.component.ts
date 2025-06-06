import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HeaderComponent, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  countries: any[] | undefined;

  selectedCountry: any | undefined = { name: 'O`z', code: 'UZ' };

  ngOnInit() {
      this.countries = [
          { name: 'O`z', code: 'UZ' },
          { name: 'Рус', code: 'RU' },
          { name: 'Eng', code: 'US' },
      ];
  }
}
