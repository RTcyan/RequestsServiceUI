import { FormControl } from '@angular/forms';
import { isDate } from 'lodash';

export class CustomValidator {
  static numeric(control: FormControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }

  static isValidDate(c: FormControl) {
    return isDate(c.value);
  }
}