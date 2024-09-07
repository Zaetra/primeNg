import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {
public namelower:string = 'fernando';
public nameUpper:string = 'FERNANDO';
public fullaName:string = 'FeRnaNdO HeRreRa';

public customDate: Date = new Date();
}
