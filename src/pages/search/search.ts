import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  
  currentMovies: any = [];
  

  constructor(public api: Api, public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  /**
   * Perform a service for the proper items.
   */
   
  getItems(ev) {
    let endpoint = "search/movie?";
    //+ this.filter + ev.value;
    this.api.get(endpoint, {api_key: this.api.apiKey, language: 'en-US', include_adult: false, query: ev.value})
    .subscribe((data : any) => {
     data.results.forEach(movie => this.currentMovies.push({
     title: movie.title,
     summary: movie.overview,
     image: movie.poster_path,
     }))
     return console.log(this.currentMovies)
   });
    
    
    // let val = ev.target.value;
    // if (!val || !val.trim()) {
    //   this.currentItems = [];
    //   return;
    // }
    // this.currentItems = this.items.query({
    //   name: val
    // });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
