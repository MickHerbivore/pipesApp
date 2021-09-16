import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Marcela';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['María', 'Mick', 'Gola', 'Jenny', 'Traffi'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  cambiarCliente() {
    this.nombre = 'Marcelo';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Mick',
    edad: 28,
    direccion: 'Av. Siempreviva 123'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000);
  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de Promise')
    }, 3500);

  });

}