import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aa-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent {
  // @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
