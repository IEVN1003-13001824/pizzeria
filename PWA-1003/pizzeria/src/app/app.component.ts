import { Component } from '@angular/core';
import { TablaPedidosComponent } from './formulario/tabla-pedido/tabla-pedido.component';
import { FormVentasComponent } from './formulario/form-ventas/form-ventas.component';
import { ResumenVentasComponent } from './formulario/resumen-ventas/resumen-ventas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TablaPedidosComponent,
    FormVentasComponent,
    ResumenVentasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizzeria';
}
