import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalOrden'
})
export class TotalOrdenPipe implements PipeTransform {

  transform(orderDetail: any[]): number {
    let total = 0;

    for (const item of orderDetail) {
      total += item.quantity * item.price;
    }

    return total;
  }

}
