import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "age"
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const today = new Date();  //3 de noviembre
    const birthDate = new Date(value); //4 de noviembre

    let age = today.getFullYear() - birthDate.getFullYear(); //2020 - 2000 = 25
    const monthDiff = today.getMonth() - birthDate.getMonth(); //11 - 11 = 0

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {

      age--;

    }
      return age;

  }
}
