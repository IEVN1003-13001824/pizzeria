import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../pizzeria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-pedido.component.html',
  styles: ``,
})
export class TablaPedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pizzeriaService: PizzeriaService) {}

  ngOnInit() {
    // Se suscribe al servicio para recibir los pedidos cuando se actualicen
    this.pizzeriaService.pedios$.subscribe((pedidos) => {
      this.pedidos = pedidos.filter(
        (pedidos) => pedidos && Object.keys(pedidos).length > 0
      );
    });
  }

  // Método para eliminar un pedido
  eliminarPedido(pedido: any) {
    this.pizzeriaService.eliminarPedido(pedido); // Llama al servicio para eliminar el pedido
  }

  // Método para completar la orden
  terminarPedido() {
    this.pizzeriaService.terminarPedido();
  }

  // Método para calcular el total de los subtotales
  calcularTotal(): number {
    return this.pedidos.reduce((total, pedido) => total + pedido.precio, 0);
  }
}
