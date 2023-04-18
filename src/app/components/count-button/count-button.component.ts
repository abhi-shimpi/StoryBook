import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import myImage from '!!file-loader!../../../assets/images/card1.svg';
// import myImage from '../../../assets/card1.svg'

@Component({
  selector: 'app-count-button',
  templateUrl: './count-button.component.html',
  styleUrls: ['./count-button.component.css'],
})
export class CountButtonComponent implements OnInit {
  cards = [1,2,3]

  @Input()
  subTitle: string = 'All Employees';

  @Input()
  titile: number = 0;

  @Input()
  icon: string =
    '../../../assets/card1.svg';

  // @Output() show:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

}
