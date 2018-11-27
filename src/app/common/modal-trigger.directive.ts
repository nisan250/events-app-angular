import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
// import $ from 'jquery';
@Directive({
  selector: '[aaModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    // we want the actual dom element and not just the wrapper.
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      // $(document).ready(function() {
        // $('#simple-modal').modal('show');
        // $('#simple-modal').removeClass('fade').addClass('in d-block');
        this.$('#simple-modal').modal({});
        // this.$('#simple-modal').removeClass('fade').addClass('in d-block');
      // });
    });

   }
}
