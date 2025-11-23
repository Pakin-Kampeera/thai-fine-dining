import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  ts = inject(TranslationService);

  menuCategories = computed<MenuCategory[]>(() => {
    const t = this.ts.translate();
    return [
      {
        name: t.MENU_STARTERS,
        items: [
          { name: t.MENU_TOMYUM, description: t.MENU_TOMYUM_DESC, price: '350 THB', image: 'https://picsum.photos/seed/tomyum/400/300' },
          { name: t.MENU_SATAY, description: t.MENU_SATAY_DESC, price: '220 THB', image: 'https://picsum.photos/seed/satay/400/300' },
          { name: t.MENU_SOMTUM, description: t.MENU_SOMTUM_DESC, price: '180 THB', image: 'https://picsum.photos/seed/somtum/400/300' }
        ]
      },
      {
        name: t.MENU_MAINS,
        items: [
          { name: t.MENU_GREENCURRY, description: t.MENU_GREENCURRY_DESC, price: '450 THB', image: 'https://picsum.photos/seed/greencurry2/400/300' },
          { name: t.MENU_PADTHAI, description: t.MENU_PADTHAI_DESC, price: '380 THB', image: 'https://picsum.photos/seed/padthai2/400/300' },
          { name: t.MENU_MASSAMAN, description: t.MENU_MASSAMAN_DESC, price: '550 THB', image: 'https://picsum.photos/seed/massaman/400/300' },
          { name: t.MENU_SEABASS, description: t.MENU_SEABASS_DESC, price: '850 THB', image: 'https://picsum.photos/seed/seabass/400/300' }
        ]
      },
      {
        name: t.MENU_DESSERTS,
        items: [
          { name: t.MENU_MANGO, description: t.MENU_MANGO_DESC, price: '250 THB', image: 'https://picsum.photos/seed/mango/400/300' },
          { name: t.MENU_BUALOY, description: t.MENU_BUALOY_DESC, price: '180 THB', image: 'https://picsum.photos/seed/bualoy/400/300' }
        ]
      }
    ];
  });
}
