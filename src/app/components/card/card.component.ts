import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  bgColor:string= 'white'

  @Input()
  imgSrc: string =
    'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg'; //Make sure you add your image URL

  @Input()
  empName?: string = 'John Doe';

  @Input()
  empRole?: string = 'Software engineer';

  @Input()
  empEmail?: string = 'johndoe@gmail.com';

  @Input()
  contactNumber?:number;

  ngOnInit(): void {}
}
