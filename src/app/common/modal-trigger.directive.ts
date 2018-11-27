import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';
// import $ from 'jquery';
@Directive({
  selector: '[aaModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input() aaModalTrigger: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    // we want the actual dom element and not just the wrapper.
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      // $(document).ready(function() {
        // NOT GENERIC generic
        // $('#simple-modal').modal('show');
        // $('#simple-modal').removeClass('fade').addClass('in d-block');
        // this.$('#simple-modal').removeClass('fade').addClass('in d-block');
        // this.$('#simple-modal').modal({});
      // });
      // MORE GENERIC
      this.$(`#${this.aaModalTrigger}`).modal({});
    });

   }
}
