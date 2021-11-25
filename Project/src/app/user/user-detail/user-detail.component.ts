import { IUser } from './../../user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  
  @Input() user?: IUser;
  @Output() closedDetail = new EventEmitter<IUser>();


  constructor() { }

  ngOnInit(): void {
  }

  closeDetails() {
    this.closedDetail.emit();
  }

}
