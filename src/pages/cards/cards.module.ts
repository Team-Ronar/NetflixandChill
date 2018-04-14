import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Item } from '../../models/item';
import { Api } from '../../providers/api/api';
import { Items } from '../../providers/providers';
import { Search } from './search/search';



import { CardsPage } from './cards';

@NgModule({
  declarations: [
    CardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CardsPage),
    TranslateModule.forChild(),
    Api,
    Items,
    Item,
    Search
    
  ],
  exports: [
    CardsPage
  ]
})
export class CardsPageModule { }
