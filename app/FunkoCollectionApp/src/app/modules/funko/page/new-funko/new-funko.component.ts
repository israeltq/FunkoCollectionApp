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
  exclusiveStores: any;
  funkoFranchises: any;
  funkoCategories: any;

  constructor(
    private funkoService: FunkoService,
    private notificationsService: NotificationsService
  ) {
    this.exclusiveStores = this.getExlusiveStores();
    this.funkoFranchises = this.getFunkoFranchises();
    this.funkoCategories = this.getFunkoCategories();
  }

  ngOnInit(): void {
    this.funkoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      franchise: new FormControl('', [Validators.required]),
      retailPrice: new FormControl(0.00, [Validators.required, Validators.min(0)]),
      actualValue: new FormControl(0.00, [Validators.required, Validators.min(0)]),
      exclusive: new FormControl(false),
      exclusivity: new FormControl(''),
      discontinued: new FormControl(false)
    });
  }

  getExlusiveStores(): any {
    return [
      { key: 'gameStop', value: 'GameStop' },
      { key: 'target', value: 'Target' },
      { key: 'walgreens', value: 'Walgreens' },
      { key: 'hotTopic', value: 'Hot Topic' },
      { key: 'funkoShop', value: 'Funko Shop' },
      { key: 'amazon', value: 'Amazon' },
    ];
  }

  getFunkoFranchises(): any {
    return [
      { key: 'dc', value: 'DC Comics' },
      { key: 'marvel', value: 'Marvel Comics' },
      { key: 'gameOfThrones', value: 'Game of Thrones' },
      { key: 'starWars', value: 'Star Wars' },
      { key: 'naruto', value: 'Naruto' },
      { key: 'avatar', value: 'Avatar' },
      { key: 'freddyFunko', value: 'Freddy Funko' },
      { key: 'dragonBall', value: 'Dragon Ball' },
    ];
  }

  getFunkoCategories(): any {
    return [
      { key: 'movies', value: 'Movies' },
      { key: 'tvSeries', value: 'TV Series' },
      { key: 'anime', value: 'Anime' },
      { key: 'cartoons', value: 'Cartoons' },
      { key: 'videoGames', value: 'Video Games' },
      { key: 'comics', value: 'Comics' },
      { key: 'books', value: 'Books' },
      { key: 'directors', value: 'Directors' },
      { key: 'music', value: 'Music' },
    ];
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
        image: ''
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
