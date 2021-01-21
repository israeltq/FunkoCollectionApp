import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

interface NotificationMessage {
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  success = 0,
  warning = 1,
  error = 2,
  info = 3
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationSubject: Subject<NotificationMessage> = new Subject<NotificationMessage>();

  constructor(private toastrService: ToastrService) { 
    this.notificationSubject.subscribe(message => {
      switch (message.type) {
        case NotificationType.success:
          this.toastrService.success(message.message);
          break;
        case NotificationType.warning:
          this.toastrService.warning(message.message);
          break;
        case NotificationType.error:
          this.toastrService.error(message.message);
          break;
        case NotificationType.info:
        default:
          this.toastrService.info(message.message);
          break;
      }
    }, err => {
      console.error('Error when processing toastr message');
    })
  }

  sendMessage(message: NotificationMessage): void {
    this.notificationSubject.next(message);
  }
}
