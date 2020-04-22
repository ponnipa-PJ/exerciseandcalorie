import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name;
  age;
  gender
  gendervalue;
  weight;
  height;
  wrist;
  brachium;
  waistline;
  data;
  hipcircumference;
  pic: any;

  constructor(private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["data"]);
      this.gendervalue = this.data.gender
      this.age = this.data.data.age
      this.weight = this.data.data.weight
      this.height = this.data.data.height
      this.wrist = this.data.data.wrist
      this.brachium = this.data.data.brachium
      this.waistline = this.data.data.waistline
      this.hipcircumference = this.data.data.hipcircumference
      console.log(this.age);
      console.log(this.gender);
      if (this.gendervalue == 'female') {
        this.gender = 'หญิง'
      }else{
        this.gender = 'ชาย'
      }
    });
   }

  ngOnInit() {
  }
  onChange(value) {
    console.log(value.detail.value);
     
  }
}
