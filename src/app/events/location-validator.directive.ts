import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[aaLocationValidator]',
  // add validator to the NG List oof Validators with ulti: true
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onLineUrlControl = formGroup.controls['onLineUrl'];

    if ((addressControl && addressControl.value
          && cityControl && cityControl.value
          && countryControl && countryControl.value) || (onLineUrlControl && onLineUrlControl.value)) {
      return null;
    } else {
      return {validateLocation: false};
    }
   }

}
