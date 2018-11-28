import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aa-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent  {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  constructor() { }

  onClick () {
    this.vote.emit({});
  }




}
