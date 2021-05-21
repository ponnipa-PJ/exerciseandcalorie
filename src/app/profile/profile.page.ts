import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CheckauthService } from '../services/checkauth.service';

const TOKEN_KEY = 'auth-token';

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
  bfc;
  bmr;
  bmi;
  ibm;
  lbm;
  bfw;
  fatdesc;
  burns;
  activity;
  activitytext;
  bmitext;
  edit = false;
  show = true;
  todo = {};
  listactivity = [];

  constructor(private route: ActivatedRoute,
    private storage: Storage,
    private authService: CheckauthService,) {
    this.ngOnInit();
    
  }

  ngOnInit() {
    this.storage.get(TOKEN_KEY).then(res => {
      this.data = res;
      this.gendervalue = this.data.gender
      this.activity = this.data.activity
      this.age = this.data.data.age
      this.weight = this.data.data.weight
      this.height = this.data.data.height
      this.wrist = this.data.data.wrist
      this.brachium = this.data.data.brachium
      this.waistline = this.data.data.waistline
      this.hipcircumference = this.data.data.hipcircumference
      this.todo = { gendervalue: this.data.gender ,
      activity:this.data.activity,
       age: this.data.data.age ,
       weight: this.data.data.weight ,
       height: this.data.data.height ,
       wrist: this.data.data.wrist ,
       brachium: this.data.data.brachium ,
       waistline: this.data.data.waistline ,
       hipcircumference: this.data.data.hipcircumference }
      console.log(this.gendervalue);
      console.log(this.activity);
      
      
      this.calvalue();

      this.listactivity = [{value:1.2,name:"นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย"},
      {value:1.375,name:"ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน"},
      {value:1.55,name:"ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน"},
      {value:1.725,name:"ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน"},
      {value:1.9,name:"ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น"}]
    });
    console.log(this.listactivity);
  }

  calvalue() {
    if (this.gendervalue == 'female') {
      this.gender = 'หญิง'
    } else {
      this.gender = 'ชาย'
    }
  }

  logForm() {
    console.log(this.todo)
  }

  save() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      let param = {
        data: this.todo,
        gender: this.gendervalue,
        activity: this.activity
      }
      this.storage.set(TOKEN_KEY, param).then(() => {
        console.log("success");
        this.ngOnInit();
      });
    });    
  }

  onChange(value) {
    this.gender = value.detail.value
  }

  onChangeactivity(value) {
    this.activity = value.detail.value
  }

}
