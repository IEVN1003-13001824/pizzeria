import { Component } from '@angular/core';
import { PizzeriaService } from '../pizzeria.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface VentaDetallada {
  nombreCliente: string;
  total: number;
}

@Component({
  selector: 'app-resumen-ventas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resumen-ventas.component.html',
  styles: ``,
})
export class ResumenVentasComponent {
  ventasDetalladas: VentaDetallada[] = [];  // Asegúrate de tener un array vacío
  ventasFiltradas: VentaDetallada[] = [];    // Inicializa ventasFiltradas
  totalVentas = 0;
  diaSeleccionado = '';

  constructor(private pizzeriaService: PizzeriaService) {}

  // Método para filtrar las ventas por día
  filtrarPorDia(dia: string): void {
    // Filtra las ventas por el día seleccionado
    this.ventasFiltradas = this.pizzeriaService.obtenerVentasDia(dia);
    this.totalVentas = this.ventasFiltradas.reduce(
      (sum, venta) => sum + venta.total,
      0
    );
  }
}
