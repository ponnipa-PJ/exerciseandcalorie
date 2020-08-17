import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CheckauthService } from '../../services/checkauth.service';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage implements OnInit {
 data;
 name;
  age;
  gender
  gendervalue;
  weight;
  height;
  wrist;
  brachium;
  waistline;
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
  bmistatustext;
  cal;

  constructor(private storage: Storage,
    private authService: CheckauthService,) { }

  ngOnInit() {
    setTimeout(() => {
      this.getLocal();
    }, 500);
  }

  getLocal(){
    this.storage.get(TOKEN_KEY).then(res => {
      this.data = res
      this.age = this.data.data.age;   
      this.gendervalue = this.data.gender
      this.activity = this.data.activity
      this.age = this.data.data.age
      this.weight = this.data.data.weight
      this.height = this.data.data.height
      this.wrist = this.data.data.wrist
      this.brachium = this.data.data.brachium
      this.waistline = this.data.data.waistline
      this.hipcircumference = this.data.data.hipcircumference
      this.calvalue();
    })
  }

  calvalue() {
    if (this.gendervalue == 'female') {
      this.gender = 'หญิง'

      //#region BFC
      let pond = this.weight * 2.2
      // console.log(pond);
      let one = (pond * 0.732) + 8.987
      let two = this.wrist / 3.140
      let three = this.waistline * 0.157
      let four = this.hipcircumference * 0.249
      let five = this.brachium * 0.434

      //น้ำหนักส่วนต่างๆของร่างกายที่ไม่ใช่ไขมัน
      this.lbm = one + two - three - four + five
      //น้ำหนักไขมันในร่างกายทั้งหมด
      this.bfw = pond - this.lbm
      //%ไขมัน
      this.bfc = (this.bfw * 100) / pond
      console.log(this.lbm);
      console.log(this.bfw);
      console.log(this.bfc);

      this.calbfc();
      //#endregion

      //#region BMR
      this.bmr = (10 * this.weight) + 6.25 * this.height - 5 * this.age - 161
      console.log(this.bmr);
      this.calbmr();
      //#endregion

      //#region BMI
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
      console.log(this.bmi);
      this.calbmi();
      //#endregion

      //#region IBW
      this.ibm = this.height - 110
      console.log(this.ibm);
      //#endregion  
    
    } else {
      this.gender = 'ชาย'

      //#region BFC
      let pond = this.weight * 2.2
      let ones = (pond * 1.082) + 94.42
      let twos = this.waistline * 4.15
      //น้ำหนักส่วนต่างๆของร่างกายที่ไม่ใช่ไขมัน
      this.lbm = ones - twos
      //น้ำหนักไขมันในร่างกายทั้งหมด
      this.bfw = pond - this.lbm
      //%ไขมัน
      this.bfc = (this.bfw * 100) / pond
      console.log(this.lbm);
      // console.log(bfms);
      console.log(this.bfc);
      this.calbfc();
      //#endregion

      //#region BMR
      this.bmr = (10 * this.weight) + 6.25 * this.height - 5 * this.age + 5
      console.log(this.bmr);
      this.calbmr();
      //#endregion

      //#region BMI
      this.bmi = this.weight / ((this.height / 100) * (this.height / 100))
      console.log(this.bmi);
      this.calbmi();
      //#endregion

      //#region IBW
      this.ibm = this.height - 105
      console.log(this.ibm);
      //#endregion      
    }
  }

  calbfc() {
    console.log(this.bfc);
    Number(this.bfc);
    if (this.gendervalue == 'female') {
      if (this.bfc >= 10 && this.bfc <= 13) {
        //ปกติ
        this.fatdesc = "ไขมันค่อนข้างน้อย เท่าที่จำเป็น"
      } else if (this.bfc >= 14 && this.bfc <= 20) {
        this.fatdesc = "ไขมันพอประมาณ (กลุ่มนักกีฬา)"
      } else if (this.bfc >= 21 && this.bfc <= 24) {
        this.fatdesc = "ไขมันพอประมาณ (กลุ่มคนออกกำลังกายเป็นประจำ)"
      } else if (this.bfc >= 25 && this.bfc <= 31) {
        this.fatdesc = "ไขมันพอประมาณ อยู่เกณฑ์พอดี (กลุ่มคนทั่วไป)"
      } else if (this.bfc >= 32) {
        this.fatdesc = "ไขมันมากเกินไป ควรลดปริมาณไขมัน"
      }
    } else {
      if (this.bfc >= 2 && this.bfc <= 5) {
        //ปกติ
        this.fatdesc = "ไขมันค่อนข้างน้อย เท่าที่จำเป็น"
      } else if (this.bfc >= 6 && this.bfc <= 13) {
        this.fatdesc = "ไขมันพอประมาณ (กลุ่มนักกีฬา)"
      } else if (this.bfc >= 14 && this.bfc <= 17) {
        this.fatdesc = "ไขมันพอประมาณ (กลุ่มคนออกกำลังกายเป็นประจำ)"
      } else if (this.bfc >= 18 && this.bfc <= 25) {
        this.fatdesc = "ไขมันพอประมาณ อยู่เกณฑ์พอดี (กลุ่มคนทั่วไป)"
      } else if (this.bfc >= 25) {
        this.fatdesc = "ไขมันมากเกินไป ควรลดปริมาณไขมัน"
      }
    }
    console.log(this.fatdesc);
  }

  calbmr() {
    Number(this.bmr);
    Number(this.activity);
    this.burns = this.bmr * this.activity;
    if (this.activity == "1.2") {
      this.activitytext = "นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย"
    }else if (this.activity == "1.375") {
      this.activitytext = "ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน"
    }else if (this.activity == "1.55") {
      this.activitytext = "ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน"
    }else if (this.activity == "1.725") {
      this.activitytext = "ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น"
    }else if (this.activity == "1.9") {
      this.activitytext = "ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน"
    }
    Number(this.activity)
    this.cal = this.weight * this.height * this.age * this.activity;
  }

  calbmi(){
    Number(this.bmi);
    if (this.bmi <= 18.50) {
      this.bmitext = "น้ำหนักน้อย / ผอม";
      this.bmistatustext = "มากกว่าคนปกติ";
    }else if (this.bmi > 18.50 && this.bmi <= 22.90) {
      this.bmitext = "ปกติ"
      this.bmistatustext = "เท่าคนปกติ";
    }else if (this.bmi > 25 && this.bmi <= 29.90) {
      this.bmitext = "อ้วน"
      this.bmistatustext = "อันตรายระดับ 2";
    }else if (this.bmi >= 30) {
      this.bmitext = "อ้วนมาก"
      this.bmistatustext = "อันตรายระดับ 3";
    }
  }

  delete(){
    this.authService.logout();
  }
}
