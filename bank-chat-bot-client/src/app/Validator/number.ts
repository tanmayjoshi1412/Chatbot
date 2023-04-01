import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static range(min: number, max: number): ValidatorFn {
    console.log(min + max);
    debugger
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
        return {'range': true};
      }
      return null;
    };
  }
}
