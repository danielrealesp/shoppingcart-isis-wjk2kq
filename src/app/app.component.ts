// Se importa la anotación utilizada para anotar componentes.
import {Component} from '@angular/core'

// Declarar el componente utilizando @Component, definiendo el selector del
// componente para ser reutilizado dentro del HTML y la ubicación del template.
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent { }
