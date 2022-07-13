import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  stars: number[] = [1, 2, 3, 4, 5];

  @Input()
  selectedValue: number = 4;

  @Input()
  selectedValueText: string;
  
  countStar(star) {
      this.selectedValue = star;
    }
  
  addClass(star) {
     let ab = "";
     for (let i = 0; i < star; i++) {
       ab = "starId" + i;
       document.getElementById(ab).classList.add("selected");
     }
  }
  removeClass(star) {
     let ab = "";
     for (let i = star-1; i >= this.selectedValue; i--) {
       ab = "starId" + i;
       document.getElementById(ab).classList.remove("selected");
     }
  }
}
