import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string, direction: boolean): any {
    if (value && value.length) {
      return value.sort((x, y) => direction ? this.asc(x[field], y[field]) : this.desc(x[field], y[field]));
    }

    return value;
  }

  private asc(x, y) {
    return x < y ? 1 : -1;
  }

  private desc(x, y) {
    return x > y ? 1 : -1;
  }
}
