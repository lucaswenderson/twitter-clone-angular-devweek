import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMenssage:string = "";
  tweetMaxLength:number = 240;
  tweetRemaining:number = this.tweetMaxLength;

  countTweet():void{
    this.tweetRemaining = this.tweetMaxLength - this.tweetMenssage.length;
  }

  sendTweet():void{
    alert(this.tweetMenssage);
  }
}
