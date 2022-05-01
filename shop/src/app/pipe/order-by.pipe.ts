import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(values: any[], key: string, isAsc: boolean = false): any {
    return key === 'name'
      ? isAsc ? values.sort() : values.sort().reverse()
      : values.sort((v1: any, v2: any) => isAsc ? v1[key] - v2[key] : v2[key] - v1[key])
  }
}
