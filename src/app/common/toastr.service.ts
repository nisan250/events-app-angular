// import { toastr } from 'toastr/build/';
import { Injectable } from '@angular/core';
// service wrapper for external library

declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
