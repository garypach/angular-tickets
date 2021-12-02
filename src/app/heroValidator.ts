/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn,ValidationErrors} from '@angular/forms';
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
}

export function forbiddenCardValidator(cardRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = cardRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

export function forbiddenCvvValidator(cvvRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = cvvRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}