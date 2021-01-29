import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationType } from '../../../../data/enums/notification-type.enum';
import { User } from '../../../../data/models/user';
import { UserService } from '../../../../data/services/user.service';
import { NotificationsService } from '../../../../shared/services/notifications.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUser: User;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      funkoCollection: new FormControl()
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  createUser(userFormValue: any): void {
    if (this.userForm.valid) {
      this.newUser = {
        userName: userFormValue.userName,
        email: userFormValue.email,
        firstName: userFormValue.firstName,
        lastName: userFormValue.lastName,
        birthday: userFormValue.birthday.toISOString(),
        funkoCollection: [],
        wishList: []
      };

      this.userService.createNewUser(this.newUser).subscribe((res) => {
        this.notificationsService.sendMessage({
          message: `User: ${res.userName} succesfully created!`,
          type: NotificationType.success
        });
      });
    }
  }

}
