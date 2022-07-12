import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectivesClasswork';
  paraDisplay: boolean = false;
  imgDisplay: boolean = false;
  videoDisplay: boolean = false;
  clickHistory: string[] = [];
  textViewed: string = 'Toggle Text" Button was clicked';
  ImageViewed: string = 'Toggle Image" Button was clicked';
  videoViewed: string = 'Toggle Video" Button was clicked';

  onParaButtonClick(){
    this.paraDisplay = true;
    this.imgDisplay = false;
    this.videoDisplay = false;
    console.log(this.textViewed);
    this.clickHistory.push(this.textViewed);
  }

  onImageButtonClick(){
    this.paraDisplay = false;
    this.imgDisplay = true;
    this.videoDisplay = false;
    console.log('The "Toggle Image" Button was clicked');
    this.clickHistory.push(this. ImageViewed);
  }

  onVideoButtonClick(){
    this.paraDisplay = false;
    this.imgDisplay = false;
    this.videoDisplay = true;
    console.log('The "Toggle Video" Button was clicked');
    this.clickHistory.push(this.videoViewed);
  }










}
