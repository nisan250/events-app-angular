import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aa-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent  {
  @Input() count: number;
  @Input() set voted(val) {
  this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  onClick () {
    this.vote.emit({});
  }




}
