// import { toastr } from 'toastr/build/';
import { InjectionToken } from '@angular/core';
// import { OpaqueToken } from '@angular/core';

// export let TOASTR_TOKEN = new OpaqueToken('toastr');
export let TOASTR_TOKEN = new InjectionToken('toastr');


export interface Toastr {
  success(msg: string, title?: string): void;
  info(message: string, title?: string): void;
  warning(message: string, title?: string): void;
  error(message: string, title?: string): void;

}
// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
//   info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
//   warning(message: string, title?: string) {
//     toastr.warning(message, title);
//   }
//   error(message: string, title?: string) {
//     toastr.error(message, title);
//   }
// }
