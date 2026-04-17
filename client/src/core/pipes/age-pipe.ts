import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
<<<<<<< HEAD
  name: "age"
=======
  name: 'age'
>>>>>>> basaar/parcial05
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
<<<<<<< HEAD
    const today = new Date();  //3 de noviembre
    const birthDate = new Date(value); //4 de noviembre

    let age = today.getFullYear() - birthDate.getFullYear(); //2020 - 2000 = 25
    const monthDiff = today.getMonth() - birthDate.getMonth(); //11 - 11 = 0

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {

      age--;

    }
      return age;

=======
    const today = new Date();
    const birthDay = new Date(value);

    let age = today.getFullYear() - birthDay.getFullYear();
    const monthDiff = today.getMonth() - birthDay.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDay.getDate())) {
      age--;
    }

    return age;
>>>>>>> basaar/parcial05
  }
}
