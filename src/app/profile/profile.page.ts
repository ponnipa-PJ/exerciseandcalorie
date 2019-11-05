import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name;
  age;
  gender;
  weight;
  height;
  pic: any;

  constructor() { }

  ngOnInit() {
  }
  onChange(value) {
    console.log(value.detail.value);
     
  }
}
