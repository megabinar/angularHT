import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string, direction: boolean): any {
    console.log();
    return value.sort((x, y) => {
      return direction ? this.asc(x[field], y[field]) : this.desc(x[field], y[field]);
    });
  }

  asc(x, y) {
    return x < y ? 1 : -1;
  }

  desc(x, y) {
    return x > y ? 1 : -1;
  }
}
