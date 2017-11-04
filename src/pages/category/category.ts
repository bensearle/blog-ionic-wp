import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  private url: string;
  private category: any;
  private posts: any[];

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');
    this.url = this.category._links['wp:post_type'][0].href;
    this.http.get( this.url )
	    .subscribe(data => {
	      this.posts = data.json();
        console.log('posts', data.json());
	    });
  }

  openPost(post) {
		this.navCtrl.push(PostPage, {
		  post: post
		});
	}

}
