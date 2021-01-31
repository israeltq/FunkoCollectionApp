import { NotificationType } from '../enums/notification-type.enum';

export interface NotificationMessage {
  message: string;
  type: NotificationType;
}
