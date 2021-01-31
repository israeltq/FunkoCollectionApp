import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationType } from '../../../../data/enums/notification-type.enum';
import { Funko } from '../../../../data/models/funko';
import { FunkoService } from '../../../../data/services/funko.service';
import { NotificationsService } from '../../../../shared/services/notifications.service';

@Component({
  selector: 'app-new-funko',
  templateUrl: './new-funko.component.html',
  styleUrls: ['./new-funko.component.css']
})

export class NewFunkoComponent implements OnInit {
  newFunko: Funko;
  funkoForm: FormGroup;

  constructor(
    private funkoService: FunkoService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.funkoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      franchise: new FormControl('', [Validators.required]),
      retailPrice: new FormControl(10.99, [Validators.required]),
      actualValue: new FormControl(0, [Validators.required]),
      exclusive: new FormControl(false, [Validators.required]),
      exclusivity: new FormControl('', [Validators.required]),
      discontinued: new FormControl(false, [Validators.required])
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.funkoForm.controls[controlName].hasError(errorName);
  }

  createFunko(funkoFormValue: any): void {
    if (this.funkoForm.valid) {
      this.newFunko = {
        name: funkoFormValue.name,
        description: funkoFormValue.description,
        category: funkoFormValue.category,
        franchise: funkoFormValue.franchise,
        retailPrice: funkoFormValue.retailPrice,
        actualValue: funkoFormValue.actualValue,
        exclusive: funkoFormValue.exclusive,
        exclusivity: funkoFormValue.exclusivity,
        discontinued: funkoFormValue.discontinued,
        image: funkoFormValue.image
      };

      this.funkoService.createNewFunko(this.newFunko).subscribe((res) => {
        this.notificationsService.sendMessage({
          message: `Funko: ${res.name} succesfully created!`,
          type: NotificationType.success
        });
      });
    }
  }

}

