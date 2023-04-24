import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMenssage:string = "";
  tweetMaxLength:number = 240;
  tweetRemaining:number = this.tweetMaxLength;

  constructor(private service: MessagesService) { }

  countTweet():void{
    this.tweetRemaining = this.tweetMaxLength - this.tweetMenssage.length;
  }

  sendTweet():void{
    this.service.addMessage(this.tweetMenssage);
    this.tweetMenssage = "";
    this.countTweet();
  }
}
