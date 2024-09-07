import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {
  public name:string = 'Fernando';
  public gender:'male'|'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla',
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public clients:string[] = [
    'Maria','Eduardo','Melissa','Herman','Natalia'
  ];

  public clientsMap = {
    '=0': 'no tenemos nigun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  };

  deleteClient():void {
    this.clients.shift();
  }

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa,Canada'
  }

  public myObservableTimer:Observable<number> = interval(2000)
  .pipe(
    tap(value => console.log('tap:',value))
  )

  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500);
  })

}
