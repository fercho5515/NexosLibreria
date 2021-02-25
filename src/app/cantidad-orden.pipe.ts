import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantidadOrden'
})
export class CantidadOrdenPipe implements PipeTransform {

  transform(orderDetail: any[]): number {
    let cantidad = 0;

    for (const item of orderDetail) {
      cantidad += item.quantity;
    }

    return cantidad;
  }

}
