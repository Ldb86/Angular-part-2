import { IUser } from './../../user';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: IUser;
  @Output() removedUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  removeUser(user: IUser): void {
    this.removedUser.emit(user)
  }

}
