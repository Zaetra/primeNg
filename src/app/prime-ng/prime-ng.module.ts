import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
//import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    CardModule,
    FieldsetModule,
    MenubarModule,
    // MenuModule,
    PanelModule,
    ButtonModule
  ],
})
export class PrimeNgModule { }
