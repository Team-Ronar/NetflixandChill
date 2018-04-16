import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  
 // @ViewChild(Slides) 
  slides: any[] = [];
  
  mySlideOptions: any = {
    loop: true,
  }
  
  

  constructor(public api: Api, public navCtrl: NavController) { }

getNowPlaying() {
    let endpoint = 'movie/now_playing';
    this.api.get(endpoint, {api_key: this.api.apiKey, language: 'en-US'})
    .subscribe( (result: any) => result.results.forEach( movie => this.slides.push(movie.poster_path)));
};

ionViewDidLoad() {
  let endpoint = 'movie/now_playing';
    this.api.get(endpoint, {api_key: this.api.apiKey, language: 'en-US'})
    .subscribe(result => {
      result.results.forEach( movie => this.slides.push(movie.poster_path))
      console.log(this.slides);
      });
};


}