import { Component, OnInit } from '@angular/core';
import { Logger } from './angular.service';
@Component({
  selector: 'app-angulartutorial',
  templateUrl: './angulartutorial.component.html',
  styleUrls: ['./angulartutorial.component.css']
})
export class AngulartutorialComponent implements OnInit {

  count = 0;

  constructor(private logger: Logger) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
  // constructor() { }
  // canEdit=false;
  // message="I'm read only!";
  // onEditClick(){
  //   this.canEdit = !this.canEdit;
  //   if (this.canEdit) {
  //   this.message = 'You can edit me!';
  //   } else {
  //     this.message = "I'm read only!";
  //   }
  // }
  // fontColor = 'Green';
  // sayHelloId = 1;
  // canClick = false;
  // message = 'Hello, World';
 
  // sayMessage() {
  //   alert(this.message);
  // }

  ngOnInit(): void {
  }
}