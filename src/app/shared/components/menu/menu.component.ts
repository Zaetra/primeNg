import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                },
                {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'uncommon'
                }
            ]
        },
        {
            label: 'Pipesperzonalizados',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Angular',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]
        }
    ];
}

}
